import express from "express";
import appRouter from "./routes";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

app.use("/api", appRouter);

const porta = process.env.PORT;

app.listen(porta, () => {
  console.log(`Server running on port ${porta}`);
});
