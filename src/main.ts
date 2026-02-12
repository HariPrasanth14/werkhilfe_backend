import { NestFactory } from '@nestjs/core';
import { AppModule } from './app_modules';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from "cookie-parser"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true
  }))
  app.use(cookieParser())
  await app.listen(3000)
  console.log("server running on 3000");
}

bootstrap()