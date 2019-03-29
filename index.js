var parser = require('./lib/parse-ini.js');
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
; comentario
[gollum]
fullname=Sméagol
type=hobbit
website=https://lotr.fandom.com/wiki/Gollum
`);
console.log(result);