import { PrismaClient } from '@prisma/client';
import { User } from '../schemas/schemas';
import IUser from '../interfaces/IUser';
import IError from '../interfaces/IError';
import { validateFieldsUser } from '../utils/validateFields';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export default class UserService {
  public register = async (user: User): Promise<IUser | IError> => {
    validateFieldsUser(user);

    const { username, email, password } = user;

    const hashedPassword = await hash(password, 6);

    const createdUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    const { id } = createdUser;

    const newUser = {
      id,
      username,
      email
    };

    return newUser;
  }
}