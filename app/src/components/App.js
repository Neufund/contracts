import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import styles from './App.css'
import web3 from '../initWeb3.js'

const App = () => {
  return (
    <div className={styles.app}>
      <h2>Testing!</h2>
      <p>Test: {2 + 2}. Hodz‽</p>
      <p>web3.version.api = {web3.version.api}</p>
    </div>
  )
}

export default App
