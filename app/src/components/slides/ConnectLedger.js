import React from 'react';
import {hashHistory} from 'react-router';
import Slide from './Slide';
import styles from './ConnectLedger.css';
import {toPromise} from '../../utils';

class ConnectLedger extends React.Component {
    constructor() {
        super();
        this.waitForLedger();
    }

    waitForLedger() {
        toPromise(web3.eth.getAccounts)
            .then((addresses)=> {
                web3.eth.defaultAccount = addresses[0];
                this.onLedgerConnected()
            })
            .catch((error)=> {
                setTimeout(::this.waitForLedger, 500);
            })
    }

    onLedgerConnected() {
        hashHistory.push("/confirm_data");
    }

    render() {
        return (
            <Slide>
                <div className={styles.step1}>
                    <div className={styles.paragraph}>
                        <h3>Please connect your Neufund wallet</h3>
                        <span>The hardware wallet acts as an additional security layer for this account</span>
                    </div>
                </div>
                <div className={styles.step2}>
                    <div className={styles.paragraph}>
                        <h3>Enter the PIN provided</h3>
                        <span>This was provided to you via email</span>
                    </div>
                </div>
                <div className={styles.step3}>
                    <div className={styles.paragraph}>
                        <h3>Navigate and open the `Ethereum` App</h3>
                        <span>This will allow the wallet to connect to the ethereum block-chain</span>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default ConnectLedger;