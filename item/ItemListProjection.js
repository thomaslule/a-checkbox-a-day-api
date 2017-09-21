class ItemListProjection {
  constructor() {
    this.items = [];
  }

  onItemAdded(event) {
    const newItem = ItemListProjection
      .createItemDisplayed(event.id, event.data.type, event.data.text, event.data.month);
    this.items.push(newItem);
  }

  getItemsForMonth(month) {
    return this.items.filter(item => item.month === month);
  }
}

ItemListProjection.createItemDisplayed = function createItemDisplayed(id, itemType, text, month) {
  return {
    id, itemType, text, month, cancelled: false, completed: false, moved: false
  };
};

module.exports = ItemListProjection;
