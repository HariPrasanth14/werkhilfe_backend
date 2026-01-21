import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config"
import env_config from "./config/env_config";
import { api_module } from "./modules/api_modules";
import { MongooseModule } from "@nestjs/mongoose"
import { APP_FILTER } from "@nestjs/core";
import { GlobalExceptionFilter } from "./common/global-exception.filter";

@Module(
    {
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
                load: [env_config]
            }),
            api_module,
            MongooseModule.forRootAsync({
                inject: [ConfigService],
                useFactory: (config: ConfigService) => ({
                    uri: config.get<string>('mongo_db.mongo_db'),
                })
            })

        ],
        providers:[
            {
                provide:APP_FILTER,
                useClass:GlobalExceptionFilter
            }
        ]
    })

export class AppModule { }



