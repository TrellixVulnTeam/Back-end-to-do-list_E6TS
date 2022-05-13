const joiValidate = (schema, body) => {
  return new Promise((resolve, reject) => {
    try {
      const { error, value } = schema.validate(body);

      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { joiValidate };
