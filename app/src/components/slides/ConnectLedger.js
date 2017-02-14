import React from 'react';
import {hashHistory} from 'react-router';
import Slide from './Slide';
import styles from './ConnectLedger.css';
import {toPromise} from '../../utils';
import Ledger from '../../../images/nano1.png';
import slideWrapper from './SlideWrapper.css'

class ConnectLedger extends React.Component {
    constructor() {
        super();
        // this.waitForLedger();
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
                <div className={slideWrapper.wrapper}>
                    <img src={Ledger} alt="Ledger" className={styles.logo}/>
                    <h1 className={styles.header}>Please connect your hardware wallet and open the Ethereum app to
                        authorize your log on.</h1>
                    <h3 className={styles.subheader}>Restricted to only pre-ICO investors</h3>
                    <div className={styles.loader}></div>
                </div>
            </Slide>
        );
    }
}

export default ConnectLedger;