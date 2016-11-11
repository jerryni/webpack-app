import './scss/main.scss'

let app = document.createElement('div')
let txt = ''
let xx = [3,4]

xx.forEach((a, b) => { txt += a })
app.innerHTML = txt
app.className = 'div-title'
document.body.appendChild(app)

app.onclick = function(){
    alert('ok')
}
