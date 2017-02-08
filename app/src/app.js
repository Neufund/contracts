import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'
import '!style-loader!css-loader!./GlobalStyles.css';

window.addEventListener('load', function() {
  render(<App/>, document.getElementById('react'))
});
