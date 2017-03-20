import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App.js'
import '!style-loader!css-loader!./GlobalStyles.css'

window.addEventListener('load', function () {
  render(<AppContainer component={App} />, document.getElementById('react'))
})
if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    render(
      <AppContainer component={require('./components/App.js').default} />,
      document.getElementById('react')
    )
  })
}
