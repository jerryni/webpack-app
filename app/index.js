import './scss/main.scss'

let app = document.createElement('div')
let txt = ''
let xx = [1, 2]

xx.forEach((a, b) => { txt += a })
app.innerHTML = txt
document.body.appendChild(app)
