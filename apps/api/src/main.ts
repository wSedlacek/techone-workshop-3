/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import 'tslint-override/angular-register';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const globalPrefix = 'api';
const port = process.env.PORT ?? 3333;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, () =>
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  );
};

bootstrap();
