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
