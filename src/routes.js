import express from "express";
import get_last_5_Lawyers from "./controller/get_last_5.controller";
import createView from "./views/create.view";
import deleteView from "./views/delete.view";
import readView from "./views/read.view";
import updateView from "./views/update.view";

const appRouter = express.Router();

appRouter.use("/", createView);
appRouter.use("/", readView);
appRouter.use("/", deleteView);
appRouter.use("/", updateView);
appRouter.use("/", get_last_5_Lawyers);

export default appRouter;
