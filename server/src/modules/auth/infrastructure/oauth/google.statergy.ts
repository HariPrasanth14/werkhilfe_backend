import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import env_config from "src/config/env_config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        const env = env_config()

        super({
            clientID: env.google.clientId!,
            clientSecret: env.google.secretKey!,
            callbackURL: `http://localhost:4001/v1/api/auth/google/callback`,
            scope:['email','profile']
        })
    }
    async validate(accessToken:string,refreshToken:string,profile:any) {
         const user = {
            email:profile.emails[0].value,
            name:profile.displayName,
            googleId:profile.id
        }
        return user
    }
}