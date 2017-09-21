const httpResponse = {
  okCallback(res) {
    return () => res.sendStatus(200);
  },

  badRequestCallback(res) {
    return () => res.sendStatus(400);
  }
};

module.exports = httpResponse;
