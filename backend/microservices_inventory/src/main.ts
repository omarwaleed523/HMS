/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001',
  });
  await app.listen(process.env.PORT ?? 3003);
  console.log(`Inventory microservice is running on port ${process.env.PORT ?? 3003}`);
}
bootstrap();