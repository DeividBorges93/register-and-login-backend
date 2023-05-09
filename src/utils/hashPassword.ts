import bcrypt from "bcrypt";

const hash = (password: string, length: number) => {
  return bcrypt.hashSync(password, length);
};

const compareHash = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword);
};

export { hash, compareHash };
