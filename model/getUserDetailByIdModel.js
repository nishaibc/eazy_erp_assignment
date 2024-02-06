const dbConn = require("../config/database");

exports.getDetailsByID = async function (user_id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT * FROM crud_api_table WHERE user_id =?",
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
