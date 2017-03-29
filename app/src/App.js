import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import styles from './App.css'
import web3 from './initWeb3.js'
import getContract from './Registry.js'

const Registry = getContract('Registry')

const App = () => {
  return (
    <div className={styles.app}>
      <h2>Web3:</h2>
      <p>web3.version.api = {web3.version.api}</p>
      <p>web3.version.network = {web3.version.network}</p>
      <p>web3.isConnected() = {web3.isConnected() ? 'yes' : 'no'}</p>
      <h2>Contracts:</h2>
      <ul>
        <li><emph>Registry</emph>: {Registry.address}</li>
      </ul>
    </div>
  )
}

export default App
