import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { service_category_services } from "../../application/service/service_category.services";
import { create_service_dto } from "../dto/create/create_service_category.dto";
import { InjectModel } from "@nestjs/mongoose";
import { ResponseUtil } from "src/common/response/api_response.wrapper";
import { update_service_dto } from "../dto/update/update_service_category";
import { Mongoose, ObjectId } from "mongoose";

@Controller("v1/api/service")
export class service_category_controller{
    constructor(
        private readonly service:service_category_services,
        private readonly response:ResponseUtil
    ){}

    @Post("new")
    async createServiceCategory(@Body() data:create_service_dto){
        return this.response.wrap(await this.service.createServiceCategory(data))
    }

    @Get('all')
    async get_all_service(){
        return this.response.wrap(await this.service.get_all_service())
    }

    @Put('update/:id')
    async update_service_category(@Param("id") id:string,@Body() data:update_service_dto){
        return this.response.wrap(
            await this.service.update_all_service(data,id)
        )
    }
    @Get('by_id/:id')
    async get_service_by_id(@Param("id") id:string){
        return this.response.wrap(await this.service.get_all_service())
    }

}