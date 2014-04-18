Greeter = require('../scripts/demo').Greeter;

describe('Jasmine', function() {
  var greeter;
  
  beforeEach(function() {
    greeter = new Greeter();
  });
  
  it('should run tests', function() {
    expect(greeter.greet('World')).toBe('Hello, World!');
  });  
});
