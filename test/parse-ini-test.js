'use strict'

var should = require("should");
var parser = require('../lib/parse-ini.js');

describe("parseINI", () => {
  it("should parse a INI input", () => {
    let expected = {
      name: "Torres Quevedo",
      address: {
        invention: "The chess player"
      }
    };
    let result = parser(`
    name=Torres Quevedo
    [address]
    invention=The chess player`);
    console.log(result);
    expected.should.eql(result);
  });
/*  it("should have an error if not valid", function () {
    (function () {
      parser('chazam')
    }).should.throw(/Error/);
  });*/
})