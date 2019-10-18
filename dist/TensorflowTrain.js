'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TensorflowTrain = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tfjsNode = require('@tensorflow/tfjs-node');

var tf = _interopRequireWildcard(_tfjsNode);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs'),
    path = require('path');

//import * as tf from '@tensorflow/tfjs-node-gpu'

/**
 * This is TensorflowTrain class
 */
var TensorflowTrain = exports.TensorflowTrain = function () {
  function TensorflowTrain() {
    _classCallCheck(this, TensorflowTrain);

    console.log('Running TensorflowTrain constructor...');
  }

  // Explicitly returns a promise


  _createClass(TensorflowTrain, [{
    key: 'start',
    value: function start() {
      return new Promise(function (resolve, reject) {
        var val = 1;
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

  }, {
    key: 'start2',
    value: async function start2() {
      return 'start2()';
    }
  }, {
    key: 'loadMobilenetModel',
    value: async function loadMobilenetModel() {
      var modelFile = './models/mobilenet/model.json';
      console.log('Looking for model at ' + modelFile);
      var model = await tf.loadLayersModel('file://' + modelFile);
      return model;
    }
  }, {
    key: 'getCurrentDir',
    value: function getCurrentDir() {
      var dirString = path.dirname(fs.realpathSync(__filename));
      return dirString;
    }
  }]);

  return TensorflowTrain;
}();