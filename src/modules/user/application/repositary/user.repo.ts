import { user_interface } from "../../domain/contracts/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import { user_model } from "../models/user.model";
import { User, userDocument } from "../../infrastructure/schema/user.scheme";
import { Model } from "mongoose";
export class user_repo implements user_interface {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<userDocument>
    ) { }
    async create_user(data: any): Promise<any> {
        return await this.userModel.create(data)
    }

    async get_all_user(): Promise<any> {
        return await this.userModel.find()
    }

    async get_by_email(email:string){
        return await this.userModel.findOne({email:email})
    }
}
