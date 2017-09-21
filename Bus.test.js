const Bus = require('./Bus');

test('registered listener get called', (done) => {
  const bus = new Bus();
  bus.addListener('test', (evt) => {
    expect(evt.data).toBe('something');
    done();
  });
  bus.publish({ type: 'test', data: 'something' });
});

test('listener on other type dont get called', (done) => {
  const bus = new Bus();
  bus.addListener('test2', () => {
    expect(1).toBe(0);
  });
  bus.addListener('test', (evt) => {
    expect(evt.data).toBe('something');
    done();
  });
  bus.publish({ type: 'test', data: 'something' });
});
