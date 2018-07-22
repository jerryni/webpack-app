import './scss/main.scss'
import run from './async.js'

run().then(email => {
    document.getElementById('app').innerHTML = `Email: ${email}`;
})
