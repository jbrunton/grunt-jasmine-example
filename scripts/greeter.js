function Greeter() {
}

Greeter.prototype.greet = function(whom) {
  return "Hello, " + whom + "!";
};

exports.Greeter = Greeter;