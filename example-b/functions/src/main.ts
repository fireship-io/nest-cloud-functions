import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express, { Express } from 'express';


// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

export const server: Express = express();

export const createNestServer = async (expressInstance: Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};
