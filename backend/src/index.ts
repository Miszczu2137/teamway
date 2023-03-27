import dotenv from "dotenv";
import { createServer } from './server';

dotenv.config();

const port = process.env.PORT;

(async () => {
  const server = await createServer();
  server.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
})();