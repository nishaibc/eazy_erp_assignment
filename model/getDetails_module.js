const dbConn = require("../config/database");

exports.getDetails = async function () {
  return new Promise((resolve, reject) => {
    dbConn.query("SELECT * FROM crud_api_table", (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

exports.getDetailsByID = async function (user_id) {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM crud_api_table WHERE user_id = ${user_id}`;
    dbConn.query(queryString, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

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

//***************************************************************************************************

exports.updateAllDetail = async function (
  fullname,
  gender,
  email,
  phone_no,
  user_id
) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `UPDATE crud_api_table SET  fullname = "${fullname}", gender ="${gender}", email ="${email}", phone_no =${phone_no} WHERE USER_id = ${user_id}`,
      [fullname, gender, email, phone_no, user_id],
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
exports.updatePhoneNoDetail = async function (phone_no, user_id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `UPDATE crud_api_table SET  phone_no = ${phone_no} WHERE USER_id = ${user_id}`,
      [phone_no, user_id],
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
exports.updateEmailDetail = async function (email, user_id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `UPDATE crud_api_table SET  email = "${email}" WHERE USER_id = ${user_id}`,
      [email, user_id],
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
exports.updateGenderDetail = async function (gender, user_id) {
  return new Promise((resolve, reject) => {
    // console.log(user_id,gender);
    dbConn.query(
      `UPDATE crud_api_table SET gender = "${gender}" WHERE USER_id = ${user_id}`,
      [gender, user_id],
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          // console.log(result);
          resolve(result);
        }
      }
    );
  });
};
exports.updateFullNameDetail = async function (fullname, user_id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `UPDATE crud_api_table SET fullname = "${fullname}" WHERE USER_id = ${user_id}`,
      [user_id, fullname],
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

//************************************************************************************

exports.deleteUserDetailsById = async (user_id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `DELETE FROM crud_api_table WHERE user_id = ${user_id}`,
      [user_id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};
