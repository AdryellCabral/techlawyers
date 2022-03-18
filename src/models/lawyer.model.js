import mongoose from "../database";

const LawyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    max: 100,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
    max: 15,
  },
  state: {
    type: String,
    required: true,
    max: 2,
  },
  oab_number: {
    type: String,
    required: true,
    max: 8,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lawyer = mongoose.model("Lawyer", LawyerSchema);

export default Lawyer;
