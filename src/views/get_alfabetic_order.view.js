import { Router } from "express";
import get_alphabetic_order from "../controller/get_alfabetic_order.controller";

const get_alphabetic_orderView = Router();

get_alphabetic_orderView.get("/list_alphabetic", get_alphabetic_order);

export default get_alphabetic_orderView;
