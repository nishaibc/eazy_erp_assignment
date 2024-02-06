const detailModel = require("../model/updateUserDetailModel");

exports.updateUserDetail = async function (req, res) {
    try {
      // console.log(req.params);
      const user_id = req.user_id;
      const fullname = req.body.fullname;
      const gender = req.body.gender;
      const phone_no = req.body.phone_no;

     
      await detailModel.updateAllDetail(fullname, gender, phone_no, user_id);
      

      res.status(200).json({ message: "User's All Details Updated successfully" });
    } catch (error) {
        res.status(500).json(error);
      }
    };
    