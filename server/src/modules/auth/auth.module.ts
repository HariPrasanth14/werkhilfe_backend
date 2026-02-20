import { Module } from "@nestjs/common";
import { auth_controller } from "./infrastructure/http/auth.controller";
import { user_model } from "../../infrastructure/database_models/user_model/user.model";
import { MongooseModule } from "@nestjs/mongoose";
import { authService } from "./application/service/auth.services";
import { auth_repo } from "./application/repositary/auth.repo";
import { User, UserSchema } from "../../common/mongo_schema/user_schema/user.scheme";
import { jwtService } from "src/core/jwt/jwtcreation";
import { Provider, ProviderSchema } from "src/common/mongo_schema/user_schema/provider.schema";
import { Provider_model } from "src/infrastructure/database_models/user_model/provider.model";
import { ResponseUtil } from "src/common/response/api_response.wrapper";
import { PassportModule } from "@nestjs/passport";
import { GoogleStrategy } from "./infrastructure/oauth/google.statergy";
import axios from "axios";
import qs from 'qs'
import { Seeker, SeekerSchema } from "src/common/mongo_schema/user_schema/seeker.schema";
@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:User.name,
                schema:UserSchema
            },
            {
                name:Provider.name,
                schema:ProviderSchema
            },
        ]),
        
        // PassportModule.register({session:false})
    ],
    providers:[
        authService,
        // GoogleStrategy,
        {
            provide:'auth_repo',
            useClass:auth_repo
        },
        jwtService,
        ResponseUtil,
        
    ],
    controllers:[auth_controller],
    exports:[authService]
})

export class auth_module{}