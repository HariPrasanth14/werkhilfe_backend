import { Injectable } from "@nestjs/common";
import jwt from "jsonwebtoken"
import * as fs from "fs"
import * as path from "path"

@Injectable()
export class jwtService{
    private readonly privatekey:string
    constructor(){
        const privateKeyPath = path.join(process.cwd(),"project","secret_keys","jwt.private.pem")
        this.privatekey = fs.readFileSync(privateKeyPath,"utf8")
    }
    
    generateJwtToken(payload:any){
        return jwt.sign(payload,this.privatekey,{
            expiresIn:"1h",
            algorithm:"RS256",
            issuer:"Hari",
            audience:"user"
        })
    }
}
let a = new jwtService()

 