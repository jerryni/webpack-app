import './scss/main.scss'

// import b, {a} from './test.js'
import {a, b, add} from './test.js'
console.log(a+b)    // 20
add()  // 35
console.log(a+b)    // 35

let app = document.createElement('div')
let txt = ''
let xx = [1, 2]

console.log('a:',a,'b:',b)
xx.forEach((a) => { txt += a })
app.innerHTML = txt
document.body.appendChild(app)
