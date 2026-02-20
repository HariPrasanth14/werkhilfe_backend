import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";

@Catch()
@Injectable()
export class GlobalExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const hostSwitch = host.switchToHttp()        
        const response = hostSwitch.getResponse()

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
        const errorMessage = exception instanceof HttpException ?
            exception.getResponse() :
            {
                error: exception.message || "Internal server error",
                message: exception.cause?.message
            }



        response.status(status).json({ statusCode: status, errorResponse: errorMessage })
    }
}