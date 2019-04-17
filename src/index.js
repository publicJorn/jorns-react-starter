import 'core-js/stable'
// import 'dom-polyfills'

import React from 'react'
import ReactDOM from 'react-dom'

import './legacyDomSupport'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
