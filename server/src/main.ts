import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app_modules';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from "cookie-parser";
import path from 'path';

 
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true
  }))
  app.use(cookieParser())
  await app.listen(4001)
  console.log("server running on 4001");
}

bootstrap()