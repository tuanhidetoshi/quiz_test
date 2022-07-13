import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './pipe/validate.pipe';
const {
  PORT = 3001,
  SWAGGER_TITLE,
  SWAGGER_DESCRIPTION,
  VERSION,
} = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion(VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidateInputPipe());

  await app.listen(PORT);
}
bootstrap();
