const defaultJoi = require("@hapi/joi");
const joiDate = require("@joi/date");
const joi = defaultJoi.extend(joiDate);

const createTodoJoiValidator = joi.object().keys({
  name: joi.string().required(),
  date: joi.date().format("MM/DD/YYYY").required()
});
 
module.exports = { createTodoJoiValidator };
