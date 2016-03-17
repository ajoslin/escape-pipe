# or-pipe [![Build Status](https://travis-ci.org/ajoslin/or-pipe.svg?branch=master)](https://travis-ci.org/ajoslin/or-pipe)

> Run a sequence of functions until one returns a value

## Install

```
$ npm install --save or-pipe
```

## Usage

```js
var orPipe = require('or-pipe')

var run = orPipe(blank, double, triple)
run(2) // => 4

function blank () {}
function double (n) {
  return n * 2
}
function triple (n) {
  return n * 3
}
```

## API

#### var run = orPipe(functions...)

###### functions

Pass in a list of a functions as arguments. Returns a `run` function.

When calling the `run` function, its arguments will be passed into each function in the list given until one returns a value (`result != null`).

The first non-null/undefined result will be returned.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
