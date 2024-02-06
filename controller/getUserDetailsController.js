const detailModel = require("../model/getUserDetailModel");

exports.getUserDetail = async function (req, res) {
  try {
    const getUserInformation = await detailModel.getDetails();

    res
      .status(200)
      .json({ message: "Detail of All Users", data: getUserInformation });
  } catch (error) {
    res.status(500).json(error);
  }
};
