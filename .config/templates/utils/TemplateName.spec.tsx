import { getUserAge } from './TemplateName';
import { User } from './interfaces';

describe('getUserAge', () => {
  it('should return the user age', () => {
    const user: User = { name: 'John Doe', age: 30 };
    expect(getUserAge(user)).toBe(30);
  });
});
