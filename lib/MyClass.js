var fs = require('fs'),
    path = require('path');

export class MyClass {
  constructor() {
    console.log('Running MyClass constructor...');
  }

  doSomething() {
    var dirString = path.dirname(fs.realpathSync(__filename));
    console.log('MyClass is doing something in ' + dirString + '...');
  }
}
