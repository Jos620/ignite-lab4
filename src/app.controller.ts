import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('prisma')
  getPrisma() {
    return this.prismaService.notification.findMany();
  }

  @Post('prisma')
  async postPrisma() {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: 'Hello World',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
