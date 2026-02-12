import { Inject, Injectable } from "@nestjs/common";
import type { service_category_controller } from "../../infrastrucure/http/service_category.controller";
import { service_category_repo } from "../repo/service_category.repo";
import mongoose from "mongoose";

@Injectable()
export class service_category_services{
    constructor(
        @Inject('service_category_repo')
        private readonly repo: service_category_repo,
    ){}

    async createServiceCategory(data:any){
        const result = await this.repo.add_service_category(data)        
        if(!result?._id){
            throw new Error('failed to insert')
        }
        return `Added successfully :${result?.name}`
    }

    async get_all_service(){
        return this.repo.get_all_service_category()
    }

    async update_all_service(data:any , id:string){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error('invalid id')
        }
        const result = await this.repo.update_service_category(data,id)
        if(!result){
            throw new Error('invalid id')
        }        
        return "Updated successfully"        
    }
 }