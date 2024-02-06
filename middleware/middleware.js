const userMiddlewareModel = require("../model/saveUserDetailsModel");
const jwt = require("jsonwebtoken");

exports.getUserAuthorization = async function (req, res, next) {
  try {
    const auth_key = req.headers.auth_key;
    const decodedJwt = jwt.decode(auth_key);

    if (decodedJwt != null) {
      const getUserId = await userMiddlewareModel.getUserDetail(
        decodedJwt.email
      );
      jwt.verify(auth_key, "key", (err, decoded) => {
        if (err) {
          // if (err.name === 'TokenExpiredError') {
          console.log("Token has expired");
          return res.status(401).json({
            message: `Token has expired`,
          });
          // } else {
          //     console.log('Invalid token');
          // }
        } else {
          req.user_id = getUserId[0].user_id;
          next();
        }
      });
    } else {
      return res.status(401).json({
        message: `Invalid token`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server error`,
      error: error,
    });
  }
};

exports.checkEmail = async function (req, res, next) {
  var email = req.body.email;
  var emailAlreadyRegistered =
    await userMiddlewareModel.checkEmailAlreadySignedUP(email);
  if (emailAlreadyRegistered.length != 0) {
    return res.status(405).json({
      message: `email already Register`,
    });
  } else {
    next();
  }
};
