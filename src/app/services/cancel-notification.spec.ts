import { Notification } from '@app/entities/notification';
import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '@app/entities/content';
import { NotificationNotFound } from './errors/notification-not-found.error';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Hello World!'),
      recipientId: 'example-id',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: 'non-existing-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});