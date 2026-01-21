import { Module } from "@nestjs/common";
import { user_controller } from "./infrastructure/http/user.controller";
import { user_model } from "./application/models/user.model";
import { MongooseModule } from "@nestjs/mongoose";
import { userService } from "./application/service/user.services";
import { user_repo } from "./application/repositary/user.repo";
import { User, UserSchema } from "./infrastructure/schema/user.scheme";
import { jwtService } from "src/core/jwt/jwtcreation";
@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:User.name,
                schema:UserSchema
            }
        ]),
    ],
    providers:[
        userService,
        {
            provide:'user_repo',
            useClass:user_repo
        },
        jwtService
    ],
    controllers:[user_controller],
    exports:[userService]
})

export class user_module{}