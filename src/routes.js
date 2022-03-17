import express from "express";
import createView from "./views/create.view";
import deleteView from "./views/delete.view";
import readView from "./views/read.view";

const appRouter = express.Router();

appRouter.use("/", createView);
appRouter.use("/", readView);
appRouter.use("/", deleteView);

export default appRouter;
