import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestInterceptor } from './common/middlewares/interceptors/request.interceptor';
import { ResponseInterceptor } from './common/middlewares/interceptors/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';

config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.useGlobalInterceptors(
    new RequestInterceptor(),
    new ResponseInterceptor(),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.listen(3000);
}
bootstrap();
