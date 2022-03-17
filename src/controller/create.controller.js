import Lawyer from "../models/lawyer.model";

const createLawyer = async (req, res) => {
  try {
    const user = await Lawyer.create(req.body);

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed!" });
  }
};

export default createLawyer;
