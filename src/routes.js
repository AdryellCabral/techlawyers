import express from "express";
import createView from "./views/create.view";
import deleteView from "./views/delete.view";
import get_alphabetic_orderView from "./views/get_alfabetic_order.view";
import get_last_5View from "./views/get_last_5.view";
import readView from "./views/read.view";
import updateView from "./views/update.view";

const appRouter = express.Router();

appRouter.use("/", createView);
appRouter.use("/", readView);
appRouter.use("/", deleteView);
appRouter.use("/", updateView);
appRouter.use("/", get_last_5View);
appRouter.use("/", get_alphabetic_orderView);

export default appRouter;
