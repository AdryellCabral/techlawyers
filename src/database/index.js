import { config } from "dotenv";
import mongoose from "mongoose";

config();

mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;

export default mongoose;
