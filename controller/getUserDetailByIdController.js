const detailModel = require("../model/getUserDetailByIdModel");

exports.getUserDetail = async function (req, res) {
  try {
    const user_id = req.body.user_id;
    const getUserInformation = await detailModel.getDetailsByID(user_id);
    console.log(getUserInformation);

    res
      .status(200)
      .json({
        message: "Detail of the user by user_id",
        data: getUserInformation,
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
