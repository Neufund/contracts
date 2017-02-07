import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'
import '!style-loader!css-loader!./GlobalStyles.css';
import initWeb3 from './initWeb3.js';

window.addEventListener('load', function() {
  initWeb3();
  render(<App/>, document.getElementById('react'))
});
