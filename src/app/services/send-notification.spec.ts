import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Hello world',
      recipientId: 'example-id',
    });

    const allNotifications = await notificationsRepository.getAll();

    expect(allNotifications).toHaveLength(1);
    expect(allNotifications[0]).toEqual(notification);
  });
});
