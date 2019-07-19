var fs = require('fs'),
    path = require('path');

/**
 * This is MyClass, for testing purpose.
 */
export class MyClass {
  constructor() {
    console.log('Running MyClass constructor...');
  }

  doSomething() {
    var dirString = path.dirname(fs.realpathSync(__filename));
    console.log('MyClass is doing something in ' + dirString + '...');
  }

  returnString() {
    return 'thisIsString';
  }

  returnNumber() {
    return 999;
  }
}
