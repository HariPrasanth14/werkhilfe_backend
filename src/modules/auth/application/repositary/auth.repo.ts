import { auth_interface } from "../../domain/contracts/auth.interface";
import { InjectModel } from "@nestjs/mongoose";
import { user_model } from "../../../../infrastructure/database_models/user_model/user.model";
import { User, userDocument } from "../../../../common/mongo_schema/user_schema/user.scheme";
import { Model } from "mongoose";
// import { Seeker, seekerDocument } from "src/common/mongo_schema/user_schema/seeker.schema";
import { Provider, ProviderDocument } from "src/common/mongo_schema/user_schema/provider.schema";
export class auth_repo implements auth_interface {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<userDocument>,
        // @InjectModel(Seeker.name)
        // private readonly seekerModel: Model<seekerDocument>,
        @InjectModel(Provider.name)
        private readonly providerModel: Model<ProviderDocument>
    ) { }
    async create_user(data: any, session: any): Promise<any> {
        return await this.userModel.create([data], { session })
    }

    async add_provider(data: any, session: any): Promise<any> {
        return await this.providerModel.create([data], { session })
    }
    async add_provider_without_session(data: any): Promise<any> {
        return await this.userModel.create(data)
    }
    async attach_google_id(id: string, data: any): Promise<any> {
        return await this.userModel.findByIdAndUpdate(id, { googleId: data })
    }

    async get_all_user(): Promise<any> {
        return await this.userModel.find()
    }

    async get_by_email(email: string) {
        return await this.userModel.findOne({ email: email })
    }



    // async get_seeker_by_email(email: string): Promise<any> {
    //     return await this.seekerModel.findOne({email})
    // }


    // async add_seeker(data: any): Promise<any> {
    //     return await this.seekerModel.create(data)
    // }

    async get_provider_by_id(id: string): Promise<any> {
        return await this.providerModel.findOne({ user_id: id })
    }
}
