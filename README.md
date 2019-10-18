# node-es6-starting-point [![Build Status](https://travis-ci.org/alanzhaonys/node-es6-starting-point.svg?branch=master)](https://travis-ci.org/alanzhaonys/node-es6-starting-point) [![Coverage Status](https://coveralls.io/repos/github/alanzhaonys/node-es6-starting-point/badge.svg)](https://coveralls.io/github/alanzhaonys/node-es6-starting-point)

Prerequisites
- Run `yarn install`

To lint
- Run `yarn lint`

To test
- Run `yarn test`

To generate test coverage report
- Run `yarn cover`

To generate JSDOC
- RUN `yarn doc`

To build
- Run `yarn build`

To generate CLI script (that required NODE enviornment)
- Run `yarn clify`

To gererate a standalone executeable/binary that DOESN'T require NODE environment
- Run `yarn package`

To run
- Run `yarn start`

Documentations: [doc/index.html](doc/index.html)


# Convert Model from Keras to Tensorflowjs Format

Run `pip3 install tensorflowjs`

Run Python3 code below
```
from tensorflow import keras
from tensorflow.keras import backend
import tensorflowjs as tfjs
mobileNet = keras.applications.mobilenet.MobileNet()
tfjs.converters.save_keras_model(mobileNet, './models/mobilenet')
```
