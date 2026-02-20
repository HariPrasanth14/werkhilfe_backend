import { HttpStatus, Injectable } from "@nestjs/common";
import { ApiResponse } from "./response.interface";
 
@Injectable()
export class ResponseUtil {
    constructor() { }
    wrap<T>(
        records: T,
        message: string = "Success",
        statusCode = HttpStatus.OK,
    ): ApiResponse<T> {
 
        return {
            date: new Date(),
            message,
            statusCode,
            records
        }
    }
}


