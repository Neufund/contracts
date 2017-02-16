import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import styles from './App.css';
import Index from './Index';
import Welcome from './slides/Welcome';
import MoreInfo from './slides/MoreInfo';
import ConnectLedger from './slides/ConnectLedger';
import ConfirmData from './slides/ConfirmData';
import BuyEth from './slides/BuyEth';
import Tutorial from './slides/Tutorial';
import BuyTokens from './slides/BuyTokens';
import ConfirmTransaction from './slides/ConfirmTransaction';
import ConfirmOnDevice from './slides/ConfirmOnDevice';
import Success from './slides/Success';

const App = () => {
    return (
        <div className={styles.app}>
            <Router history={hashHistory}>
                <Route path="/" component={Index}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/more_info" component={MoreInfo}/>
                <Route path="/connect_ledger" component={ConnectLedger}/>
                <Route path="/confirm_data" component={ConfirmData}/>
                <Route path="/buy_eth" component={BuyEth}/>
                <Route path="/tutorial" component={Tutorial}/>
                <Route path="/buy_tokens" component={BuyTokens}/>
                <Route path="/confirm_transaction" component={ConfirmTransaction}/>
                <Route path="/confirm_on_device" component={ConfirmOnDevice}/>
                <Route path="/success" component={Success}/>
            </Router>
        </div>
    )
};

export default App;