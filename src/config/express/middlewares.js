const bodyParser = require("body-parser");
const cors = require("cors");

const setExpressMiddlewares = (app) => {
  return new Promise((resolve, reject) => {
    try {
      app.use(cors());
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      resolve(app)
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = { setExpressMiddlewares };
