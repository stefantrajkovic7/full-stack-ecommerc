import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { AppModule } from './app.module';
import { Config } from './config/config.interface';

async function bootstrap() {
  const serverConfig: Config = config.get('server');
  const logger = new Logger('bootstrap');

  const port = process.env.PORT || serverConfig.port;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(port);
  logger.log(`Application listening on port: ${port}`);
}
bootstrap();
