const dbConn = require("../config/database");

exports.deleteUserDetailsById = async (user_id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `DELETE FROM crud_api_table WHERE user_id = ?`,
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
