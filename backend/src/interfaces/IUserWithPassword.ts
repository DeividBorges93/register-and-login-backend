import IUser from "./IUser";

export default interface IUserWithPassword extends IUser {
  password: string;
}
