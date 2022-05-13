const express = require('express');
const {setExpressMiddlewares} = require("./middlewares")
const {todoControllerData} = require("../../controller/todo.controller")
const app = express();

const startServer = () => {
  return new Promise(async(resolve, reject) => {
    setExpressMiddlewares(app)
    .then(todoControllerData)
    .then(resolve).catch(reject);
   });
};

module.exports = { startServer };
