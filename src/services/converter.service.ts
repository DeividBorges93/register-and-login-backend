import { PrismaClient } from '@prisma/client';
import { User } from '../schemas/schemas';

const prisma = new PrismaClient();

export default class ConverterService {
  public convert = async (currencyConvert: string, currencyrConverted: string, user: User) {
    
  }
}