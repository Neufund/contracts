import React from 'react';
import Slide from './Slide';
import styles from './ConnectLedger.css';

class ConnectLedger extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_data">
                <div className={styles.step1}>
                    <p className={styles.paragraph}>
                        <h3>Please connect your Neufund wallet</h3>
                        <span>The hardware wallet acts as an additional security layer for this account</span>
                    </p>
                </div>
                <div className={styles.step2}>
                    <p className={styles.paragraph}>
                        <h3>Enter the PIN provided</h3>
                        <span>This was provided to you via email</span>
                    </p>
                </div>
                <div className={styles.step3}>
                    <p className={styles.paragraph}>
                        <h3>Navigate and open the `Ethereum` App</h3>
                        <span>This will allow the wallet to connect to the ethereum block-chain</span>
                    </p>
                </div>
            </Slide>
        );
    }
}

export default ConnectLedger;