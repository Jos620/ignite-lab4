import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../app/services/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { notification } = await this.sendNotification.execute(body);

    return {
      notification,
    };
  }
}
