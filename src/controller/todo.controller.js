const {getTodosService,createTodosService,deleteTodosService,updateTodosService,} = require("../services/todo.service");
const todoControllerData = (app) => {
  return new Promise((resolve, reject) => {
    try {
      getTodo(app)
        .then(createTodo)
        .then(deleteTodo)
        .then(updateTodo)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
const getTodo = (app) => {
  return new Promise((resolve, reject) => {
    try {
      app.get("/v1/todo", async (request, response) => {
        getTodosService(request.body)
          .then((todos) => {
            console.log(todos);
            response.send({ todos });
          })
          .catch((error) => {
            response.status(500).send({ error });
          });
      });
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
};

const createTodo = (app) => {
  return new Promise((resolve, reject) => {
    try {
      app.post("/v1/todo", async (request, response) => {
        createTodosService(request.body);
        then((insertedTodo) => {
          response.send({ insertedTodo });
        }).catch((error) => {
          response.status(500).send({ error });
        });
      });
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTodo = (app) => {
  return new Promise((resolve, reject) => {
    try {
      app.delete("/v1/todo/:id", async (request, response) => {
        deleteTodosService(request.params.id);
        then((deletedTodo) => {
          response.send({ deletedTodo });
        }).catch((error) => {
          response.status(500).send({ error });
        });
      });
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
};

const updateTodo = (app) => {
  return new Promise((resolve, reject) => {
    try {
      app.put("/v1/todo/:id", async (request, response) => {
        updateTodosService(request.body, request.params.id);
        then((updateTodo) => {
          response.send({ updateTodo });
        }).catch((error) => {
          response.status(500).send({ error });
        });
      });
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = { todoControllerData };
