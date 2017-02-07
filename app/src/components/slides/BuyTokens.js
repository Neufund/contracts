import React from 'react';
import Slide from './Slide';
import styles from './BuyTokens.css';

class BuyTokens extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_transaction">
                <div className={styles.wrapper}>
                    <p>Now that your wallet contains some ETH we will use them to purchase NMKs</p>
                    <p>Your pre-determined ticket size is 150 NMKs</p>
                    <div className={styles.details}></div>
                </div>
            </Slide>
        );
    }
}

export default BuyTokens;