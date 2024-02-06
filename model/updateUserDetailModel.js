const dbConn = require("../config/database");

exports.updateAllDetail = async function (fullname, gender, phone_no, user_id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `UPDATE crud_api_table SET  fullname = ?, gender = ?, phone_no = ? WHERE user_id = ?`,
      [fullname, gender, phone_no, user_id],
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
