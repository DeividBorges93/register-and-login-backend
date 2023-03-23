import 'express-async-errors';
import express from 'express';
// import userRouter from '../routes/user.routes';

class Api {
  public api: express.Express;
  
  constructor() {
    this.api = express();

    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.api.use(express.json());
    this.api.use(accessControl);

    // this.api.use(userRouter);
  }

  public start(PORT: string | number):void {
    this.api.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { Api };
