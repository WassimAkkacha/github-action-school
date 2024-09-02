import { User } from '../../app/user/User';
import { UserService } from '../../app/user/UserService';

describe('UserService class', () => {
  const userRepositoryMock = {
    findUserById: jest.fn(),
  };
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(userRepositoryMock);
  });

  test('returns user data when findUserById resolves', async () => {
    //Arrange
    const mockUser: User = { id: 'Id1', username: 'Khalil', age: 22 };
    userRepositoryMock.findUserById.mockImplementation((id: string) => mockUser);

    //Act
    const user = await userService.getUser('Id1');
    //Assert
    expect(user).toEqual(mockUser); // Ensure getUser returns the correct data
    expect(userRepositoryMock.findUserById).toHaveBeenCalledTimes(1); // Ensure findUserById is called once
    expect(userRepositoryMock.findUserById).toHaveBeenCalledWith('Id1'); // Ensure findUserById is called with the correct argument
  });

  test('throws an error when findUserById rejects', async () => {
    //Arrange
    userRepositoryMock.findUserById.mockRejectedValue(new Error('User not found'));
    //Act & Assert
    await expect(userService.getUser('Id')).rejects.toThrow('User not found'); // Ensure getUser throws the correct error
  });
});
