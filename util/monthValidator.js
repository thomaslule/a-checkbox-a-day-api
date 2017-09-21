const moment = require('moment');

const monthValidator = value => moment(value, 'YYYY-MM', true).isValid();

module.exports = monthValidator;
