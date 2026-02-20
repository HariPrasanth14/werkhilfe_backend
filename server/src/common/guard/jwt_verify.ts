import { CanActivate ,ExecutionContext , UnauthorizedException ,Injectable } from "@nestjs/common"
import * as jwt from "jsonwebtoken"
import * as fs from "fs"
import * as path from 'path'
import { Observable } from "rxjs"

@Injectable()
export class JwtAuthGuard implements CanActivate{
    private publicKey:string
    constructor(){
        const publicKeypath = path.join(process.cwd(),"project","secret_keys","jwt.public.pem")
        this.publicKey = fs.readFileSync(publicKeypath,'utf8')
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        
        const authHeader = req?.cookies?.accessToken

        // if(!authHeader || !authHeader.startsWith("Bearer")){
        //     throw new UnauthorizedException("Invalid token")
        // }
        // const token = authHeader.split(" ")[0]
        const token = authHeader

        if(!token){
            throw new UnauthorizedException("Invalid token")
        }
        try{
            const decode = jwt.verify(token,this.publicKey,{
                algorithms:["RS256"],
                issuer:"Hari",
                audience:"user"
            })
            // console.log(decode);
            return true
        }catch(err){
            throw new UnauthorizedException("Invalid token")
        }

        }
    }
    
 
