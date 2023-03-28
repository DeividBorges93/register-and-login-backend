import Jwt from '../utils/tokenGenerator';

  export default (authorization: string) => {
    const jwt = new Jwt();

    const tokenDecrypt = jwt.decrypt(authorization);

    return tokenDecrypt;
  };
