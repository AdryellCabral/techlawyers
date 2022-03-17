import { Router } from "express";
import get_last_5_Lawyers from "../controller/get_last_5.controller";

const get_last_5View = Router();

get_last_5View.get("/list_last_5", get_last_5_Lawyers);

export default get_last_5View;
