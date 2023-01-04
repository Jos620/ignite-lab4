import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-id',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'example-id',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'another-id',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-id',
    });

    expect(count).toBe(2);
  });
});
