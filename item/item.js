const uuidv1 = require('uuid/v1');
const itemEvents = require('./itemEvents');

const item = {
  addItem(bus, type, month, text) {
    const event = itemEvents.itemAdded(uuidv1(), type, month, text);
    bus.publish(event);
    return event.id;
  }
};

module.exports = item;
