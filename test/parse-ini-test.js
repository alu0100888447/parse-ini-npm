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
  it("LOTR", function () {
    let expected = {
      searchengine: 'https://duckduckgo.com/?q=$1',
      spitefulness: '9.7',
      gandalf:
       { fullname: 'Mithrandir',
         type: 'grey wizard',
         website: 'http://tolkiengateway.net/wiki/Gandalf' },
      gollum:
       { fullname: 'Sméagol',
         type: 'hobbit',
         website: 'https://lotr.fandom.com/wiki/Gollum' } 
    };
    let result = parser(`
    ; comments are preceded by a semicolon
    ; global section
    searchengine=https://duckduckgo.com/?q=$1
    spitefulness=9.7

    ; each section but the global starts with [identifier]
    [gandalf]
    fullname=Mithrandir
    type=grey wizard
    website=http://tolkiengateway.net/wiki/Gandalf

    [gollum]
    fullname=Sméagol
    type=hobbit
    website=https://lotr.fandom.com/wiki/Gollum`);
    console.log(result);
    expected.should.eql(result);
  });
})