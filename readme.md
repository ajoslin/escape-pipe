# or-pipe [![Build Status](https://travis-ci.org/ajoslin/or-pipe.svg?branch=master)](https://travis-ci.org/ajoslin/or-pipe)

> Run a sequence of functions until one returns a value

## Install

```
$ npm install --save or-pipe
```

## Usage

```js
var orPipe = require('or-pipe')

var run = orPipe(blank, double, tripe)

run(2) // => 4

function blank () {}

function double (n) {
  return n * 2
}

function triple (n) {
  return n * 3
}
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
