
const detailModel = require("../model/deleteUserDetailModel");

exports.deleteUserDetail = async function (req, res) {
    try {
      var user_id = req.user_id;
      console.log(user_id)
      await detailModel.deleteUserDetailsById(user_id);
      res.status(200).json({ message: "Data deleted...!" });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  