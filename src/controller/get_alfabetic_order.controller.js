import Lawyer from "../models/lawyer.model";

const get_alphabetic_order = async (req, res) => {
  let users = await Lawyer.find().sort({ name: 1 });

  return res.json(users);
};

export default get_alphabetic_order;
