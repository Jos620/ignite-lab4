import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CreateNotificationBody } from '../app/create-notification.body';

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

  @Get('notifications')
  async listNotifications() {
    return await this.prismaService.notification.findMany();
  }

  @Post('notifications')
  async createNotification(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
