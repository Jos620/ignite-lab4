import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/services/cancel-notification';
import { CountRecipientNotification } from '@app/services/count-recipient-notifications';
import { GetRecipientNotification } from '@app/services/get-recipient-notifications';
import { ReadNotification } from '@app/services/read-notification';
import { UnreadNotification } from '@app/services/unread-notification';
import { SendNotification } from '../../app/services/send-notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
