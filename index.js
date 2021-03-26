import {query} from './query.js'

function doit(strings, ...keys) {
  console.log(strings, keys)
}


let X = 1234
let Y = 'qwer'
// doit`asdf ${X} zxcv ${Y}`


const phone = '2134561923'
const serial = 'di39fj2'
let result = query`SELECT * FROM blah WHERE id = ${X} AND phone like '%${phone}%' AND serial = ${serial}`

console.log(result)