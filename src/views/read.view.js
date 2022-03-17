import { Router } from "express";
import readLawyers from "../controller/read.controller";

const readView = Router();

readView.get("/list_lawyers", readLawyers);

export default readView;
