#!/usr/bin/env node

import { TensorflowTrain } from './TensorflowTrain';

const tensorflowTrain = new TensorflowTrain();

// start() explicitly returns a promise
var promise = tensorflowTrain.start();
promise.then(data => {
  console.log(data);
}).catch(err => {
  console.log(err, err.stack);
});

// start2() is an asycn function implicitly returns a promise
var promise2 = tensorflowTrain.start2();
promise2.then(data => {
  console.log(data);
}).catch(err => {
  console.log(err, err.stack);
});

var mobilePromise = tensorflowTrain.loadMobilenetModel();
mobilePromise.then(data => {
  console.log(data);
}).catch(err => {
  console.log(err, err.stack);
});

