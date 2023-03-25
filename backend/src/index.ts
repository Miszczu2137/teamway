import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import db, { init as dbInit, Test } from "./db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/tests", async (req: Request, res: Response) => {
  const data = await db.getObject<Test>("/tests");
  res.header("Access-Control-Allow-Origin", "*");
  res.json(data);
});

dbInit();

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
