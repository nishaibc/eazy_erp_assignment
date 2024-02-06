const detailModel = require("../model/getDetails_module");

exports.getUserDetail = async function (req, res) {
  try {
    const user_id = req.user_id;
    const getUserInformation = await detailModel.getDetails();
    res
      .status(200)
      .json({ message: "Detail of All Users", data: getUserInformation });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUserDetailById = async function (req, res) {
  try {
    // when we will pass the userID in url (http://localhost:3000/get-user-detail-by-userID/101) then we will use params and
    //wheb  we will pass the useID in the json form the we will use  body
    var user_id = req.params.user_id;
    const getUserInformationById = await detailModel.getDetailsByID(user_id);
    res
      .status(200)
      .json({
        message: "Detail of the user by user_id",
        data: getUserInformationById,
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.saveUserDetail = async function (req, res) {
  try {
    console.log(req.body);
    var fullname = req.body.fullname;
    var gender = req.body.gender;
    var email = req.body.email;
    var phone_no = req.body.phone_no;

    await detailModel.saveDetail(fullname, gender, email, phone_no);

    res.status(200).json({ message: "User's data saved successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

//**************************************************************************************************

exports.updateUserDetail = async function (req, res) {
  try {
    // console.log(req.params);
    var user_id = req.params.user_id;
    var fullname = req.body.fullname;
    var gender = req.body.gender;
    var email = req.body.email;
    var phone_no = req.body.phone_no;

    if (
      user_id != undefined &&
      fullname != undefined &&
      gender == undefined &&
      email == undefined &&
      phone_no == undefined
    ) {
      await detailModel.updateFullNameDetail(fullname, user_id);
      res.status(200).json({ message: "User's FULLNAME Updated successfully" });
    } else {
      if (
        user_id != undefined &&
        fullname == undefined &&
        gender != undefined &&
        email == undefined &&
        phone_no == undefined
      ) {
        console.log(user_id, gender);
        await detailModel.updateGenderDetail(gender, user_id);
        res.status(200).json({ message: "User's GENDER Updated successfully" });
      } else {
        if (
          user_id != undefined &&
          fullname == undefined &&
          gender == undefined &&
          email != undefined &&
          phone_no == undefined
        ) {
          await detailModel.updateEmailDetail(email, user_id);
          res
            .status(200)
            .json({ message: "User's EMAIL-ID Updated successfully" });
        } else {
          if (
            user_id != undefined &&
            fullname == undefined &&
            gender == undefined &&
            email == undefined &&
            phone_no != undefined
          ) {
            await detailModel.updatePhoneNoDetail(phone_no, user_id);
            res
              .status(200)
              .json({ message: "User's PHONE NUMBER Updated successfully" });
          } else {
            if (
              user_id != undefined &&
              fullname != undefined &&
              gender != undefined &&
              email != undefined &&
              phone_no != undefined
            ) {
              await detailModel.updateAllDetail(
                fullname,
                gender,
                email,
                phone_no,
                user_id
              );
              res
                .status(200)
                .json({ message: "User's ALL DETAILS Updated successfully" });
            } else {
              res
                .status(200)
                .json({ message: "please enter the valid detail...!" });
            }
          }
        }
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//*********************************************************************************************************

exports.deleteUserDetail = async function (req, res) {
  try {
    var user_id = req.params.user_id;

    await detailModel.deleteUserDetailsById(user_id);
    res.status(200).json({ message: "Data deleted...!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
