import { PrismaClient } from '@prisma/client'
import IUserWP from '../interfaces/IUserWithPassword';
import IUser from '../interfaces/IUser';

const prisma = new PrismaClient();

export default class userAlreadyRegistered {
  public verifyForRegister = async (username: string) => {
    const userAlreadyRegistered = await prisma.user.findFirst({
      where: { username: username },
    })
    .catch((err) => {
      err
    });

    if (userAlreadyRegistered) throw { code: 400, message: 'Erro: Usuário já existe' };
  };
  
  public verifyForLogin = async (user: IUser): Promise<IUserWP> => {
    const { username, email } = user;

    const userAlreadyRegistered = await prisma.user.findFirst({
      where: { username: username, email: email},
    })
    .catch((err) => {
      err
    });
    
    if (!userAlreadyRegistered) throw { code: 401, message: 'Erro: Usuário não cadastrado' };

    return userAlreadyRegistered;

  };
}