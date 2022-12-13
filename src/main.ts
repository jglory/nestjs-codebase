import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.ENV === 'localhost' ? ['verbose', 'debug'] : ['error', 'log'],
  });

  // cors
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // 인입체크.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 스웨거
  setupSwagger(app);

  // 서버
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();
