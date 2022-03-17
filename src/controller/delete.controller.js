import Lawyer from "../models/lawyer.model";

const deleteLawyer = async (req, res) => {
  const { id } = req.params;

  if (id.length !== 24) {
    return res.status(400).send({ error: "User not found!" });
  }

  const user = await Lawyer.find({ _id: id });

  if (!user.length) {
    return res
      .status(400)
      .send({ error: "User not found or already deleted!" });
  }

  try {
    Lawyer.findByIdAndRemove(id).exec();
    return res.status(200).send({ msg: "Lawyer removed!" });
  } catch (err) {
    return res.status(400).send({ error: "Failed to delete user!" });
  }
};

export default deleteLawyer;
