import { PrismaClient } from '@prisma/client';
import { User } from '../schemas/schemas';
import IUser from '../interfaces/IUser';
import IError from '../interfaces/IError';
import { validateFieldsLoginUser, validateFieldsUser } from '../utils/validateFields';
import { hash } from 'bcrypt';
import IToken from '../interfaces/IToken';
import UserAlreadyRegistered from '../utils/userAlreadyRegistered';
import { compareHash } from '../utils/hashPassword';
import Jwt from '../utils/tokenGenerator';

const prisma = new PrismaClient();
const userAlreadyRegistered = new UserAlreadyRegistered();


export default class UserService {
  public register = async (user: User): Promise<IUser | IError> => {
    validateFieldsUser(user);

    const { username, email, password } = user;

    const hashedPassword = await hash(password, 6);

    await userAlreadyRegistered.verifyForRegister(username);

    const createdUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    const newUser = {
      username,
      email
    };

    return newUser;
  }

  public login = async (user: User): Promise<IToken> => {
    const { username, email, password } = user;

    const userRegistered = await userAlreadyRegistered.verifyForLogin(username);

    validateFieldsLoginUser(user);

    const { id, password: dbPassword } = userRegistered;

    const matchPassword = compareHash(password, dbPassword);

    if (!matchPassword) throw { code: 401, message: 'Senha inválida' };

    const token = new Jwt().encrypt({ id, username, email});

    return { token } as IToken;
  }
}