import "express-async-errors";
import cors from "cors";
import express, { Request, Response } from "express";

import errorMiddleware from "../middlewares/error.middleware";
import { userRouter } from "../routes";

class Api {
  public api: express.Express;

  constructor() {
    this.api = express();

    this.config();
    this.routes();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    this.api.use(cors());
    this.api.use(express.json());
    this.api.use(accessControl);
  }

  private routes(): void {
    this.api.get("/ping", (_req: Request, res: Response) =>
      res.status(200).json({ data: "Pong" })
    );

    this.api.use(userRouter);
    this.api.use(errorMiddleware);
  }

  public start(PORT: string | number): void {
    this.api.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { Api };
