import express from "express";
import createLawyer from "../controller/create.controller";

const createView = express.Router();

createView.post("/register", createLawyer);

export default createView;
