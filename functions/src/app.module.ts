import { Module } from '@nestjs/common';
import { EggController } from './egg/egg.controller';

@Module({
  controllers: [EggController]
})
export class AppModule {}
