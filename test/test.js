import { MyClass } from '../lib/MyClass';

let expect = require('chai').expect;

describe('MyClass', function() {
  it('Tests MyClass', function() {
    let myClass = new MyClass();
    expect(myClass.returnString()).to.be.a('string');
    expect(myClass.returnNumber()).to.be.a('number');
  });
});
