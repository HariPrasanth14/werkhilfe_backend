import { InjectModel } from "@nestjs/mongoose";
import { service_category_interface } from "../../domain/contracts/service_category.interface";
import { ServiceCategory } from "src/common/mongo_schema/service/service-category.schema";
import { Model } from "mongoose";
import { where } from "sequelize";

export class service_category_repo implements service_category_interface {
    constructor(
        @InjectModel(ServiceCategory.name)
        private readonly serviceModel: Model<ServiceCategory>
    ) { }

    async add_service_category(data: any): Promise<any> {
        return await this.serviceModel.create(data)
    }

    async get_all_service_category(): Promise<any> {
        return await this.serviceModel.find(
            {
                is_deleted:false
            }
        )
    }

    async update_service_category(data: any, id: string): Promise<any> {
        const result = await this.serviceModel.findByIdAndUpdate(id,data)
         
        return result?._id?true:false
    }
    
}