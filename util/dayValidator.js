const moment = require('moment');

const dayValidator = value => moment(value, 'YYYY-MM-DD', true).isValid();

module.exports = dayValidator;
