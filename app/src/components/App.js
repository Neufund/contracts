import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import styles from './App.css'
import web3 from '../initWeb3.js'

const App = () => {
  return (
    <div className={styles.app}>
      <h2>Web3! Hot!</h2>
      <p>web3.version.api = {web3.version.api}</p>
      <p>web3.version.network = {web3.version.network}</p>
      <p>web3.isConnected() = {web3.isConnected() ? 'yes' : 'no'}</p>
    </div>
  )
}

export default App
