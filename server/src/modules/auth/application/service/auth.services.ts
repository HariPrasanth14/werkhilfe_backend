import { Inject, Injectable } from "@nestjs/common";
import { auth_repo } from "../repositary/auth.repo";
import { authBaseDto } from "../../infrastructure/dto/auth_base_dto";
import { jwtService } from "src/core/jwt/jwtcreation";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";

import mongoose, { Types } from "mongoose";
@Injectable()
export class authService {
    constructor(
        private readonly jwt: jwtService,
        @Inject('auth_repo')
        private readonly repo: auth_repo,
        @InjectConnection() private readonly connection: Connection
    ) { }
    async create_user(data: any): Promise<any> {
        console.log("hello");

        const session = await this.connection.startSession()
        try {
            let result = await session.withTransaction(async () => {
                let userResult: any
                if (!data.service_type && !data.experience_years && !data.price_per_hour) {
                    userResult = await this.repo.create_user(data, session)
                } else {
                    let userData = {
                        email: data.email,
                        name: data.name,
                        password: data.password
                    }
                    userResult = await this.repo.create_user(userData, session)
                    let provider_data = {
                        user_id: userResult[0]._id,
                        service_type: data.service_type,
                        service_id: data.service_id,
                        experience_years: data.experience_years,
                        price_per_hour: data.price_per_hour,
                        is_available: data.is_available,
                        state: data.state,
                        district: data.district,
                        city: data.city
                    }
                    // console.log(provider_data);

                    await this.repo.add_provider(provider_data, session)
                }

                return userResult
            })

            return "Created successfully"
        } catch (err) {
            console.log(err);

            // await session.abortTransaction()
            throw err
        } finally {
            await session.endSession()
        }

    }

    async get_all_user(): Promise<any> {
        const result = await this.repo.get_all_user()
        return result
    }

    async login(data: authBaseDto) {
        const { email, password } = data
        let userData = await this.repo.get_by_email(email)


        if (!userData) {
            throw new Error("Invalid email/password")
        }
        let id: Types.ObjectId = userData._id

        const providerData = await this.repo.get_provider_by_id(id.toString())

        let is_provider: boolean = false

        if (providerData) {
            is_provider = true
        }
        if (userData.password !== password) {
            throw new Error("Invalid email/password")
        }
        const token = this.jwt.generateJwtToken({
            id: userData._id,
            email: userData.email,
        })
        return [token, is_provider]
    }

    async googleLogin(googleUser: any) {
        let userData = {
            email: googleUser?.email,
            name: googleUser?.name,
            googleId: googleUser?.id,
            Provider:"google"
        }
        let user = await this.repo.get_by_email(userData?.email)
        if (!user) {
            user = await this.repo.add_provider_without_session(userData)
            console.log(user);
            
        }
        // else if(!user?.googleId){
        //     await this.repo.attach_google_id(user._id.toString(),userData.googleId)
        //     user.googleId = userData.googleId
        // }

        const token = this.jwt.generateJwtToken({
            email: user?.email,
            name: user?.name
        })
        return {
            msg: "logged in",
            token
        }
    }

}