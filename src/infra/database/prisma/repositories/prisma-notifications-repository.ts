import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from '../../../../app/repositories/notifications-repositories';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }

  async getAll(): Promise<Notification[]> {
    return await this.prismaService.notification.findMany();
  }
}
