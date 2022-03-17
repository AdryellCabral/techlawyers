import express from "express";
import createLawyer from "./controller/create.controller";
import readLawyers from "./controller/read.controller";

const appRouter = express.Router();

appRouter.post("/", createLawyer);
appRouter.get("/", readLawyers);

export default appRouter;
