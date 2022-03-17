import Lawyer from "../models/lawyer.model";

const updateLawyer = async (req, res) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).send({ error: "Id must have 24 characters." });
  }

  const finded = await Lawyer.find({ email: req.body.email });

  if (finded.length) {
    return res.status(400).send({ error: "Email already in use!" });
  }

  const user = await Lawyer.findById({ _id: id });

  console.log(user);

  if (!user) {
    return res.status(400).send({ error: "User not found!" });
  }

  const query = { _id: id };
  Lawyer.findOneAndUpdate(query, req.body, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send({ msg: "Succesfully saved." });
  });
};

export default updateLawyer;
