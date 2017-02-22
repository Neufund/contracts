import React from 'react';
import {hashHistory} from 'react-router';
import Slide from './Slide';
import styles from './ConnectLedger.css';
import {toPromise} from '../../utils';
import Ledger from '../../../images/nfledger.png';
import Arrow from '../Arrow';
import slideWrapper from './SlideWrapper.css'

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
                console.log(error);
                setTimeout(::this.waitForLedger, 500);
            })
    }

    onLedgerConnected() {
        hashHistory.push("/buy_eth");
    }

    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>

                    <h1 className={styles.header}>YOUR NEUFUND LEDGER</h1>
                    <div>
                        <div className={styles.text}>
                            Your connected Neufund ledger,
                            will act as an authentication device for your account.
                        </div>
                        <div className={styles.text}>
                            It is required for you to logon to the platform.
                            The ledger will also act as a digital signature
                            for signing transactions like investing in proposals
                            and casting votes
                        </div>
                    </div>
                    <img src={Ledger} alt="Ledger" className={styles.logo}/>
                </div>
            </Slide>
        );
    }
}

export default ConnectLedger;