const helloBisect = require('./hello-bisect');

describe('helloBisect', () => {
  it('returns "Hello world"', () => {
    expect(helloBisect()).toEqual('Hello bisect');
  });
});