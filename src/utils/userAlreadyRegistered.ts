import { PrismaClient } from "@prisma/client";

import IUser from "../interfaces/IUser";
import IUserWP from "../interfaces/IUserWithPassword";

const prisma = new PrismaClient();

export default class userAlreadyRegistered {
  public verifyForRegister = async (username: string) => {
    const userAlreadyRegistered = await prisma.user
      .findFirst({
        where: { username },
      })
      .catch((err) => {
        err;
      });

    if (userAlreadyRegistered)
      throw { code: 400, message: "Erro: Usuário já existe" };
  };

  public verifyForLogin = async (user: IUser): Promise<IUserWP> => {
    const { username, email } = user;

    const userAlreadyRegistered = await prisma.user
      .findFirst({
        where: { username, email },
      })
      .catch((err) => {
        err;
      });

    if (!userAlreadyRegistered)
      throw { code: 401, message: "Erro: Usuário não cadastrado" };

    return userAlreadyRegistered;
  };
}
