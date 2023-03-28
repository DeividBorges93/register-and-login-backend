import { User, UserSchema } from '../schemas/schemas';
import IError from '../interfaces/IError';

export const validateFieldsUser = (user: User) => {
  const validatedUser = UserSchema.safeParse(user);

  if (validatedUser.success === false) throw {code: 401, message: validatedUser.error.issues[0].message} as IError;
};
