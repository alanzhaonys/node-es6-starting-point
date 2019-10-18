#!/usr/bin/env node
'use strict';

var _TensorflowTrain = require('./TensorflowTrain');

var tensorflowTrain = new _TensorflowTrain.TensorflowTrain();

// start() explicitly returns a promise
var promise = tensorflowTrain.start();
promise.then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err, err.stack);
});

// start2() is an asycn function implicitly returns a promise
var promise2 = tensorflowTrain.start2();
promise2.then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err, err.stack);
});

var mobilePromise = tensorflowTrain.loadMobilenetModel();
mobilePromise.then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err, err.stack);
});