import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  const sendNotification = new SendNotification();

  it('should be able to send a notification', async () => {
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Hello world',
      recipientId: 'example-id',
    });

    expect(notification).toBeInstanceOf(Notification);
  });
});
