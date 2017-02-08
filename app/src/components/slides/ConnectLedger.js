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
            .then(this.onLedgerConnected)
            .catch((error)=> {
                console.log(error);
                this.waitForLedger();
            })
    }

    onLedgerConnected() {
        hashHistory.push("/confirm_data");
    }

    render() {
        return (
            <Slide linkTo="/confirm_data">
                <div className={styles.step1}>
                    <p className={styles.paragraph}>
                        <p>Please connect your Neufund wallet</p>
                        <span>The hardware wallet acts as an additional security layer for this account</span>
                    </p>
                </div>
                <div className={styles.step2}>
                    <p className={styles.paragraph}>
                        <p>Enter the PIN provided</p>
                        <span>This was provided to you via email</span>
                    </p>
                </div>
                <div className={styles.step3}>
                    <p className={styles.paragraph}>
                        <p>Navigate and open the `Ethereum` App</p>
                        <span>This will allow the wallet to connect to the ethereum block-chain</span>
                    </p>
                </div>
            </Slide>
        );
    }
}

export default ConnectLedger;