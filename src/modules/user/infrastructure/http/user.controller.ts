import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { userService } from "../../application/service/user.services";
import { CreateUserDto } from "../dto/create_user.dto";
import { userBaseDto } from "../dto/user_base_dto";
import type { Response } from "express";
import { JwtAuthGuard } from "src/common/guard/jwt_verify";

@Controller("user")
export class user_controller {
    constructor(
        private readonly service: userService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    async get_all_users(@Res() res: any) {
        try {
            return res.json(await this.service.get_all_user())
        } catch (err) {
            throw err
        }
    }

    
    @Post('add_user')
    async post_users(@Res() res: any, @Body() data: CreateUserDto) {
        try {            
            let result = await this.service.create_user(data)
            res.json({
                message: "user created",
                data: result
            })
        } catch (err) {
            throw err
        }
    }

    @Post("login")
    async login(@Res() res:Response , @Body() data:userBaseDto){
        try{
            const result = await this.service.login(data)
            res.json({
                message:"user logged in",
                data:result
            })

        } catch (err) {
            throw err
        }
    }
}