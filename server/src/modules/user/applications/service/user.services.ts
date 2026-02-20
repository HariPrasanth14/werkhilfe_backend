import { Inject, Injectable } from "@nestjs/common";
import { userRepo } from "../repository/user.repo";

@Injectable()
export class userService {
    constructor(
        @Inject('userRepo')
        private readonly repo: userRepo
    ) { }
    async get_provider(): Promise<any> {
        return await this.repo.get_provider()
    }

    async get_provider_by_id(id: string): Promise<any> {
        return await this.repo.get_provider_by_id(id)
    }

    async update_provider(id: string, data: any): Promise<any> {
        const ext_provider_Data = await this.repo.get_provider_by_id(id)
        const ext_user_Data = await this.repo.get_user_by_id(id)
        const extData = { ...ext_provider_Data, ...ext_user_Data }
        if (!extData?.name) {
            throw new Error("Invalid id")
        }

        let valid_provider_data: Object = {}
        let valid_user_data: Object = {}
        Object.keys(data).forEach((key) => {
            if (extData[key] !== data[key] && data[key] !== "") {
                if (key === "email" || key === "name") {
                    valid_user_data[key] = data[key]
                } else {
                    valid_provider_data[key] = data[key]
                }
            }
        })

        if(Object.keys(valid_provider_data).length === 0 && Object.keys(valid_user_data).length === 0){
            throw new Error("every field is up to date")
        }

        let isUpdated: boolean = false
        if (Object.keys(valid_user_data).length > 0) {
            const updateData = await this.repo.update_user(id, valid_user_data)
            if (updateData?.modifiedCount === 0) {
                throw new Error("Invalid data")
            }
            isUpdated = true
        }
        if (Object.keys(valid_provider_data).length > 0) {
            const updateData = await this.repo.update_provider(id, valid_provider_data)
            if (updateData?.modifiedCount === 0) {
                throw new Error("Invalid data")
            }
            isUpdated = true
        }

        if (!isUpdated) {
            throw new Error("Invalid data")
        }
        
        return { message: "Updated successfully" }
    }
}