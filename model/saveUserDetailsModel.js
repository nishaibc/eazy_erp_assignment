const dbConn = require("../config/database");

exports.saveDetail = async function (fullname, gender, email, phone_no) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "INSERT INTO crud_api_table(fullname,gender,email,phone_no)VALUES(?,?,?,?)",
      [fullname, gender, email, phone_no],
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

exports.getUserDetail = async function (email) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "select * from crud_api_table where email = ?",
      [email],
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

exports.userData = (user_id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM crud_api_table WHERE user_id=?`,
      [user_id],
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

exports.checkEmailAlreadySignedUP = (email) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM crud_api_table WHERE email=?`,
      [email],
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};
