import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

import IError from "../interfaces/IError";
import IToken from "../interfaces/IToken";
import IUser from "../interfaces/IUser";
import { User } from "../schemas/schemas";
import { compareHash } from "../utils/hashPassword";
import Jwt from "../utils/tokenGenerator";
import UserAlreadyRegistered from "../utils/userAlreadyRegistered";
import {
  validateFieldsLoginUser,
  validateFieldsUser,
} from "../utils/validateFields";

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
        username,
        email,
        password: hashedPassword,
      },
    });

    const newUser = {
      username,
      email,
    };

    return newUser;
  };

  public login = async (user: User): Promise<IToken> => {
    const { username, email, password } = user;

    const userRegistered = await userAlreadyRegistered.verifyForLogin({
      username,
      email,
    });

    validateFieldsLoginUser(user);

    const { id, password: dbPassword } = userRegistered;

    const matchPassword = compareHash(password, dbPassword);

    if (!matchPassword) throw { code: 401, message: "Senha inválida" };

    const token = new Jwt().encrypt({ id, username, email });

    return { token } as IToken;
  };
}
