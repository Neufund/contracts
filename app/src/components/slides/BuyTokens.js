import React from 'react';
import Slide from './Slide';
import styles from './BuyTokens.css';
import slideWrapper from './SlideWrapper.css'
import Balance from '../Balance';
import button from '../Button.css';
import {Link} from 'react-router';

class BuyTokens extends React.Component {
    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>
                    <h1>Now that your wallet contains some ETH we will use them to purchase NMKs</h1>
                    <h2>Your pre-determined ticket size is 150 NMKs</h2>
                    <div className={styles.details}>
                        <Balance of="ETH"/>
                        <Balance of="NMK">
                            <Link to="/confirm_transaction">
                                <button className={button.btn}>
                                    Buy
                                </button>
                            </Link>
                        </Balance>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default BuyTokens;