import { Inject, Injectable } from "@nestjs/common";
import { user_repo } from "../repositary/user.repo";
import { userBaseDto } from "../../infrastructure/dto/user_base_dto";
import { jwtService } from "src/core/jwt/jwtcreation";
@Injectable()
export class userService {
    constructor(
        private readonly jwt:jwtService
    ){}
    @Inject('user_repo')
    private readonly repo: user_repo
    async create_user(data: any): Promise<any> {
        const result = await this.repo.create_user(data)
        return result
    }

    async get_all_user(): Promise<any> {
        const result = await this.repo.get_all_user()
        return result
    }

    async login(data:userBaseDto){
        const { email , password } = data

        const userData = await this.repo.get_by_email(email)
        if(!userData){
            throw new Error("Invalid email/password")
        }
        if(userData.password !== password){
            throw new Error("Invalid email/password")
        }
        const token = this.jwt.generateJwtToken({
            id:userData._id,
            email:userData.email,
            role:userData.role
        })
        return token
        }
}