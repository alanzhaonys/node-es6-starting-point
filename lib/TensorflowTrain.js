const fs = require('fs'),
    path = require('path');

import * as tf from '@tensorflow/tfjs-node';
//import * as tf from '@tensorflow/tfjs-node-gpu'

/**
 * This is TensorflowTrain class
 */
export class TensorflowTrain {
  constructor() {
    console.log('Running TensorflowTrain constructor...');
  }

  // Explicitly returns a promise
  start() {
    return new Promise((resolve, reject) => {
      let val = 1;
      if (val === 1) {
        resolve('start() success');
      } else {
        reject('start() failed');
      }
    });
  }

  // async functions returns a promise.
  // async functions use an implicit Promise to return its result.
  // Even if you don't return a promise explicitly async function makes sure that your code is passed through a promise.
  // await blocks the code execution within the async function, of which it( await statement ) is a part.
  async start2() {
    return 'start2()';
  }

  async loadMobilenetModel() {
    var modelFile = './models/mobilenet/model.json';
    console.log('Looking for model at ' + modelFile);
    let model = await tf.loadLayersModel('file://' + modelFile);
    return model;
  }

  getCurrentDir() {
    var dirString = path.dirname(fs.realpathSync(__filename));
    return dirString;
  }
}
