import { Body, Controller, Get, Param, Post, Put, Req, Res, UseGuards, HttpStatus } from "@nestjs/common";
import { authService } from "../../application/service/auth.services";
import { CreateProviderDto } from "../dto/create_user.dto";
import { authBaseDto } from "../dto/auth_base_dto";
import type { Response, Request } from "express";
import { JwtAuthGuard } from "src/common/guard/jwt_verify";
import { ResponseUtil } from "src/common/response/api_response.wrapper";

@Controller("v1/api/auth")
export class auth_controller {
    constructor(
        private readonly service: authService,
        private readonly response: ResponseUtil
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('all_user')
    async get_all_users() {
     
        return this.response.wrap(await this.service.get_all_user());
    }

    @Post('add_user')
    async post_users(@Body() data: CreateProviderDto) {
         const result = await this.service.create_user(data);
         return this.response.wrap(result, "user created");
    }

    @Post("login")
    async login(@Res({ passthrough: true }) res: Response, @Body() data: authBaseDto) {
        const [accessToken, is_provider] = await this.service.login(data);
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "none",
            secure: false, // Should be true in production with HTTPS
            path: "/",
            maxAge: 60 * 60 * 1000, // 1 hour
        });
        // Using passthrough allows setting cookies while NestJS handles sending the response.
        return this.response.wrap({ is_provider }, "login successful");
    }

    @Get("logout")
    async logout(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
        const accessToken = req?.cookies?.accessToken;

        if (!accessToken) {
            // It's a good practice to return a proper status code for unauthorized access.
            return this.response.wrap(null, "user not logged in", HttpStatus.UNAUTHORIZED);
        }

        res.clearCookie("accessToken", {
            httpOnly: true,
            sameSite: "none",
            secure: false, // Should be true in production with HTTPS
            path: "/",
        });
        return this.response.wrap(null, "logout successful");
    }

   
}