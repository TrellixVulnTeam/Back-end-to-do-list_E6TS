const { dbConnection } = require("./config/db/sqlite");
const { startServer } = require("./config/express/express");
require("dotenv").config({ path: ".env" });

dbConnection()
  .then(startServer)
  .then((app) => {
    app.listen(process.env.SERVER_PORT, () => {
      console.log(
        `Server is up and running on port '${process.env.SERVER_PORT}' in '${process.env.NODE_ENV}' enviroment.`
      );
    }); 
  })
  .catch(console.error);
