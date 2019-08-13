import { Controller, Get } from '@nestjs/common';

@Controller('egg')
export class EggController {
    @Get()
    findAll(): string {
      return 'Some eggs 🥚🥚🥚🥚';
    }
}
