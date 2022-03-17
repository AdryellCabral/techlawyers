import express from "express";
import updateLawyer from "../controller/update.controller";

const updateView = express.Router();

updateView.put("/update_lawyer/:id", updateLawyer);

export default updateView;
