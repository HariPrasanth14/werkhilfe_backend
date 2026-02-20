import { Body, Controller, Get, Param, Post, Put, Req, Res, UseGuards, HttpStatus, Query } from "@nestjs/common";
import { authService } from "../../application/service/auth.services";
import { CreateProviderDto } from "../dto/create_user.dto";
import { authBaseDto } from "../dto/auth_base_dto";
import type { Response, Request } from "express";
import { JwtAuthGuard } from "src/common/guard/jwt_verify";
import { ResponseUtil } from "src/common/response/api_response.wrapper";
import { AuthGuard } from "@nestjs/passport";
import env_config from "src/config/env_config";
import axios from "axios";
import qs from 'qs'
@Controller("v1/api/auth")
export class auth_controller {
    private readonly env: any
    constructor(
        private readonly service: authService,
        private readonly response: ResponseUtil,
    ) {
        this.env = env_config()
    }

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


    @Get('google')
    // @UseGuards(AuthGuard('google'))
    async googleLogin(@Res() res: any) {
        console.log("ki",this.env?.google?.clientId);
        const clientId = await this.env?.google?.clientId
        
        const redirectUri = `http://localhost:4001/v1/api/auth/google/callback`
        const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth` +
            `?client_id=${clientId}` +
            `&redirect_uri=${redirectUri}` +
            `&response_type=code` +
            `&scope=email profile` +
            `&access_type=offline`;

        return res.redirect(googleUrl)
    }

    @Get('google/callback')
    // @UseGuards(AuthGuard('google'))
    async googleCallback(@Query('code') code: string) {
           
        // 
        const tokenResponse = await axios.post(
            "https://oauth2.googleapis.com/token",
            qs.stringify({
                client_id: this.env.google.clientId,
                client_secret: this.env.google.secretKey,
                code: code,
                grant_type: "authorization_code",
                redirect_uri: "http://localhost:4001/v1/api/auth/google/callback"
            }),{
                headers:{
                'Content-Type':'application/x-www-form-urlencoded'
             
            }
            }
        )
        

        const accessToken = tokenResponse.data.access_token

        const userResponse = await axios.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )

        const profile = userResponse.data
        const token = await this.service.googleLogin(profile)
         return this.response.wrap(token)
    }

}