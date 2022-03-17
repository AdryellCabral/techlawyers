import express from "express";
import deleteLawyer from "../controller/delete.controller";

const deleteView = express.Router();

deleteView.delete("/delete_lawyer/:id", deleteLawyer);

export default deleteView;
