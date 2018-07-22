import './scss/main.scss'
import run from './async.js'
import React from 'react'
import ReactDom from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

run().then(name => {
    ReactDom.render(
        <HelloMessage name={ name } />,
        document.getElementById('app')
    );
})

