class Bus {
  constructor() {
    this.listeners = {};
  }

  addListener(type, callback) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(callback);
  }

  publish(event) {
    const interestedListeners = this.listeners[event.type];
    if (interestedListeners) {
      interestedListeners.forEach(l => l(event));
    }
  }
}

module.exports = Bus;
