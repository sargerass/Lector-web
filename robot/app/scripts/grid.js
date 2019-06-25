import '../styles/main.scss'
import ReactDOM from 'react-dom'
import React from 'react'
import ParrillaMovil from './components/parrilla/ParrillaMovil'

if (process.env.NODE_ENV !== 'production') {
  require('../grid.pug')
}

ReactDOM.render(<ParrillaMovil />, document.getElementById('app'))

$(document).ready(() => {
  /* eslint-disable no-console */
  console.log('console dentro de jquery con grid js')
})

/* eslint-disable no-console */
console.log('hello world grid system')
