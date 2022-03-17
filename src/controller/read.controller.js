import Lawyer from "../models/lawyer.model";

const readLawyers = async (req, res) => {
  let users = await Lawyer.find();

  return res.json(users);
};

export default readLawyers;
