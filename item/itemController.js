const { check } = require('express-validator/check');
const item = require('./item');
const ItemListProjection = require('./ItemListProjection');
const monthValidator = require('../util/monthValidator');
const itemTypeValidator = require('./itemTypeValidator');
const validate = require('../util/validate');
const { badRequestCallback } = require('../util/httpResponse');

function itemController(app, bus, itemListProjection) {
  app.get(
    '/api/Item/GetMonthItems/:month',
    [
      check('month').custom(monthValidator)
    ],
    (req, res) => {
      validate(req)
        .then(params => res.json(itemListProjection.getItemsForMonth(params.month)))
        .catch(badRequestCallback(res));
    }
  );

  app.post(
    '/api/Item/AddItem',
    [
      check('itemType').custom(itemTypeValidator),
      check('month').custom(monthValidator),
      check('text').isLength({ min: 1 })
    ],
    (req, res) => {
      let params;
      validate(req)
        .then((params2) => {
          params = params2;
          return item.addItem(bus, params.itemType, params.month, params.text);
        })
        .then((id) => {
          const newItem = ItemListProjection
            .createItemDisplayed(id, params.itemType, params.text, params.month);
          res.status(201).json(newItem);
        })
        .catch(badRequestCallback(res));
    }
  );
}

module.exports = itemController;
