const { dbConnection, connection } = require("../config/db/sqlite");
const { joiValidate } = require("../shared/validators/joi.validator");
const {
  createTodoJoiValidator,
} = require("../shared/validators/todo.validator");

const getTodosService = () => {
  return new Promise((resolve, reject) => {
    try {
      dbConnection()
        .then((connection) => {
          connection.all("select * from todo;", (error, rows) => {
            if (error) {
              reject(error);
            } else {
              resolve(rows);
            }
          });
        })
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

const createTodosService = (body) => {
  return new Promise((resolve, reject) => {
    joiValidate(createTodoJoiValidator, body)
      .then((validatedValue) => {
        const { name, date } = validatedValue;
        dbConnection()
          .then((connection) => {
            connection.run(
              `insert into todo (name, date) values ('${name}', '${new Date(
                date
              ).toISOString()}')`,
              (error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve("inserted");
                }
              }
            );
          })
          .catch(reject);
      })
      .catch(reject);
  });
};

const deleteTodosService = (body) => {
  return new Promise((resolve, reject) => {
    dbConnection().then((connection) => {
      connection.run(`delete from todo where id = ${id}`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("deleted");
        }
      });
    });
  });
};

const updateTodosService = (body, id) => {
  return new Promise((resolve, reject) => {
    joiValidate(updateTodoJoiValidator, body)
      .then((validatedValue) => {
        const { name, date } = validatedValue;
        dbConnection().then((connection) => {
            connection.run(`update todo set name = '${name}', date ='${new Date(date).toISOString()}' where id =${id}`,(error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve("updated");
                }
              }
            );
          })
          .catch(reject);
      })
      .catch(reject);
  });
};
module.exports = { getTodosService, createTodosService, deleteTodosService, updateTodosService };
