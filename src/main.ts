import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.use(helmet());

  patchNestjsSwagger();
  const config = new DocumentBuilder()
    .setTitle('Events Registration')
    .setDescription('API for events registration')
    .setVersion('0.0.1')
    .addTag('events')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, { ...document, openapi: '3.1.0' });

  await app.listen(3000);
}
bootstrap();
