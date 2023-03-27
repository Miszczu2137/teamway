import express, { Express, Request, Response } from "express";
import cors from "cors";

import db, { init as dbInit, Test } from "./db";

export const createServer = async (): Promise<Express> => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.get("/tests", async (req: Request, res: Response) => {
    const data = await db.getObject<Test>("/tests");
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
  });

  dbInit();

  return app;
}