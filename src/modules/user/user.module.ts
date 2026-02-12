import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Provider, ProviderSchema } from "src/common/mongo_schema/user_schema/provider.schema";
import { User, UserSchema } from "src/common/mongo_schema/user_schema/user.scheme";
import { userService } from "./applications/service/user.services";
import { user_controller } from "./infrastructure/http/user.controller";
import { userRepo } from "./applications/repository/user.repo";
import { ResponseUtil } from "src/common/response/api_response.wrapper";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            },
            {
                name: Provider.name,
                schema: ProviderSchema
            }
        ])
    ],
    providers:[
        {
            provide:'userRepo',
            useClass:userRepo
        },
        userService,
        ResponseUtil
    ],
    controllers:[user_controller],
    exports:[userService]
    
})

export class user_module {}