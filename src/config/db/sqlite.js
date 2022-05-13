const sqlite3 = require("sqlite3");
require("dotenv").config({ path: ".env" });

let connection;

const dbConnection = () => {
  return new Promise((resolve, reject) => {
    try {
      const dbConnectionString = `${process.env.SQLITE_LOCATION}/${process.env.SQLITE_DBNAME}`;
      if (!connection) connection = new sqlite3.Database(dbConnectionString);
      resolve(connection);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = { dbConnection, connection};
