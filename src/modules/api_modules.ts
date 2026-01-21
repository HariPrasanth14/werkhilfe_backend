import { Module } from "@nestjs/common";
import { user_module } from "./user/user.module";

@Module({
    imports: [
        user_module
    ]
})

export class api_module { }
