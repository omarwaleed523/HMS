import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from the frontend running on port 3002
  app.enableCors({
    origin: 'http://localhost:3002', // Specify the frontend URL
  });

  // Listen on port 3000
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
