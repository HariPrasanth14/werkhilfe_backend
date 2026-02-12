import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { ServiceCategory, ServiceCategorySchema } from "src/common/mongo_schema/service/service-category.schema";
import { service_category_repo } from "./application/repo/service_category.repo";
import { service_category_services } from "./application/service/service_category.services";
import { ResponseUtil } from "src/common/response/api_response.wrapper";
import { service_category_controller } from "./infrastrucure/http/service_category.controller";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:ServiceCategory.name,
                schema:ServiceCategorySchema
            }
        ])
    ],
    providers:[
        {
            provide:'service_category_repo',
            useClass:service_category_repo
        },
        service_category_services,
        ResponseUtil
    ],
    controllers:[service_category_controller],
    exports:[service_category_services]
})

export class service_category_module{}