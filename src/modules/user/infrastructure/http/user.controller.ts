import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { userService } from "../../applications/service/user.services";
import { ResponseUtil } from "src/common/response/api_response.wrapper";

@Controller("/api/v1/users")
export class user_controller{
    constructor(
        private readonly service:userService,
        private readonly response:ResponseUtil
    ){}
    @Get('/provider')
    async get_provider() {
        return this.response.wrap(await this.service.get_provider());
    }

    @Get('/provider/:id')
    async get_provider_by_id(@Param("id") id: string) {
     
        return this.response.wrap(await this.service.get_provider_by_id(id));
    }

    @Put('/update/:id')
    async update_provider(@Param("id") id: string, @Body() data: any) {
        return this.response.wrap(await this.service.update_provider(id, data));
    }
}