import { InjectModel } from "@nestjs/mongoose";
import { userInterface } from "../../domain/contracts/user.infrastructure";
import { Provider_model } from "src/infrastructure/database_models/user_model/provider.model";
import { user_model } from "src/infrastructure/database_models/user_model/user.model";
import { Provider, ProviderDocument } from "src/common/mongo_schema/user_schema/provider.schema";
import { User, userDocument } from "src/common/mongo_schema/user_schema/user.scheme";
import { Model } from "mongoose";

export class userRepo implements userInterface {
    constructor(
        @InjectModel(Provider.name)
        private readonly providerModel: Model<ProviderDocument>,
        @InjectModel(User.name)
        private readonly userModel: Model<userDocument>
    ) { }

    async get_provider(): Promise<any> {
        return await this.providerModel.find()
    }


    async update_provider(id: string, data: any): Promise<any> {
        return await this.providerModel.updateOne({ user_id: id }, data)
    }

    async update_user(id:string , data:any):Promise<any>{
        return await this.userModel.updateOne({_id:id},data)
    }

    async get_provider_by_id(id: string): Promise<any> {
        let data = await this.providerModel.findOne(
            { user_id: id }
        )
        return data?.toJSON()
    }
    async get_user_by_id(id: string): Promise<any> {
        let data = await this.userModel.findOne(
            { _id: id }
        )
        return data?.toJSON()

    }
}