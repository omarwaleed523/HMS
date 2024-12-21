
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  // Enable CORS
  await app.listen(process.env.PORT ?? 3002);
  console.log(`Application running on http://localhost:${process.env.PORT ?? 3002}`);

}
bootstrap();


