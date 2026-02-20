import { Global, Module } from "@nestjs/common";
import { ResponseUtil } from "./api_response.wrapper";

@Global()
@Module({
  providers: [ ResponseUtil],
  exports: [ResponseUtil],
})
export class ApiResponseModule {}
