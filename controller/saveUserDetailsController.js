const detailModel = require("../model/saveUserDetailsModel");
const jwt = require("jsonwebtoken");

exports.saveUserDetail = async function (req, res) {
  try {
    console.log(req.body);
    const fullname = req.body.fullname;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone_no = req.body.phone_no;

    // Create a JWT token with an expiration time.
    const token = jwt.sign({ email }, "key", { expiresIn: "2m" });

    const details = await detailModel.saveDetail(
      fullname,
      gender,
      email,
      phone_no
    );
    var user_id = details.insertId;

    const data = await detailModel.userData(user_id);

    data[0]["token"] = token;
    res
      .status(200)
      .json({ message: "User's data saved successfully", details: data[0] });
  } catch (error) {
    res.status(500).json(error);
  }
};
