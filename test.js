'use strict'

var test = require('tape')
var orPipe = require('./')

test(function (t) {
  var run = orPipe(blank, double, triple)

  t.equal(run(2), 4)
  t.end()
})

function blank () {}

function double (n) {
  return n * 2
}

function triple (n) {
  return n * 3
}
