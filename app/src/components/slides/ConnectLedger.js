import React from 'react';
import Slide from './Slide';
import styles from './ConnectLedger.css';

class ConnectLedger extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_data">
                <p>Connect your Ledger</p>
            </Slide>
        );
    }
}

export default ConnectLedger;