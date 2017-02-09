import React from 'react';
import Slide from './Slide';
import styles from './BuyTokens.css';
import slideWrapper from './SlideWrapper.css'
import Balance from '../Balance';

class BuyTokens extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_transaction">
                <div className={slideWrapper.wrapper}>
                    <p>Now that your wallet contains some ETH we will use them to purchase NMKs</p>
                    <p>Your pre-determined ticket size is 150 NMKs</p>
                    <div className={styles.details}>
                        <Balance of="ETH"/>
                        <Balance of="NMK"/>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default BuyTokens;