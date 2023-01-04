import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/content';

export function makeNotification(overrides: Partial<NotificationProps> = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Hello World!'),
    recipientId: 'example-id',
    ...overrides,
  });
}
