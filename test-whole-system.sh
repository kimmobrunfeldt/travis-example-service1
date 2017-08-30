#!/bin/bash

set -e
set -x

npm i -g wait-port

npm start &
wait-port 3000

rm -rf travis-example-service2
git clone https://github.com/kimmobrunfeldt/travis-example-service2.git
cd travis-example-service2
npm install
npm start &
cd ..
wait-port 4000

echo "Running tests against the whole system .."
./node_modules/.bin/mocha
