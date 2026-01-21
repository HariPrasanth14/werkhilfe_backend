import { IsString } from "class-validator";

export class userBaseDto{
    @IsString()
    email:string

    @IsString()
    password:string
}