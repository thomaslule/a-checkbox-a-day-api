const itemTypeValidator = value => ['TASK', 'NOTE', 'EVENT'].indexOf(value) > -1;

module.exports = itemTypeValidator;
