import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repositories';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  private notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async getAll(): Promise<Notification[]> {
    return this.notifications;
  }
}
