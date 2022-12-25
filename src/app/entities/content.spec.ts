import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Hello World!');

    expect(content.value).toBe('Hello World!');
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('a'.repeat(4))).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
