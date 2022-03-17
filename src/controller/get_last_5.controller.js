import Lawyer from "../models/lawyer.model";

const get_last_5_Lawyers = async (req, res) => {
  let users = await Lawyer.find().sort({ createdAt: -1 }).limit(5);

  return res.json(users);
};

export default get_last_5_Lawyers;
