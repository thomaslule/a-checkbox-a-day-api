const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

function validate(req) {
  return new Promise((resolve, reject) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      resolve(matchedData(req));
    } else {
      reject(errors);
    }
  });
}

module.exports = validate;
