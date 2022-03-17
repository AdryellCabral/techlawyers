import Lawyer from "../models/lawyer.model";

const createLawyer = async (req, res) => {
  try {
    if (Lawyer.find({ name: req.body.name })) {
      return res.status(400).send({ error: "Email already in use!" });
    }

    const user = await Lawyer.create(req.body);

    user.save();

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed!" });
  }
};

export default createLawyer;
