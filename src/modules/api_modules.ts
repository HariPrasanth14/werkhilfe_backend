import { Module } from "@nestjs/common";
import { auth_module } from "./auth/auth.module";
import { user_module } from "./user/user.module";
import { service_category_module } from "./service_category/service_category.module";

@Module({
    imports: [
        auth_module,
        user_module,
        service_category_module
    ]
})

export class api_module { }
