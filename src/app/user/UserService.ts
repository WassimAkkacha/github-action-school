import { UserRepository } from './UserRepository';

export class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(userId: string) {
    const user = this.userRepository.findUserById(userId);
    return user;
  }
}
