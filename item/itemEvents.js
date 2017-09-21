const itemEvents = {
  itemAdded: (id, type, month, text) => ({
    type: 'ItemAdded', date: new Date(), id, data: { type, month, text },
  }),
};

module.exports = itemEvents;
