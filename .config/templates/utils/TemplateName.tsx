import { User } from './interfaces';

export const getUserAge = (user: User): number => {
  return user.age;
};
