import { User } from './User';

export class UserRepository {
  static users: User[] = [
    { id: 'Id1', username: 'Khalil', age: 22 },
    { id: 'Id2', username: 'Nawres', age: 24 },
    { id: 'Id3', username: 'Anis', age: 27 },
    { id: 'Id4', username: 'Emir', age: 26 },
    { id: 'Id5', username: 'Ahmed', age: 25 },
  ];

  findUserById(userId: string): User {
    const user = UserRepository.users.find((user) => user.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
