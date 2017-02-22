import React from 'react';
import Slide from './Slide';
import styles from './BuyEth.css';
import slideWrapper from './SlideWrapper.css'
import Balance from '../Balance';
import button from '../Button.css';
import {Link} from 'react-router';

const BuyEth = () => {
    return (
        <Slide>
            <div className={slideWrapper.wrapper}>
                <h1 className={styles.header}>YOUR NEUFUND WALLET</h1>
                <div className={styles.text}>
                    Your Neufund wallet is where your ETH and NMK are stored.
                    <br/>
                    ETH is a crypto-asset
                    and the primary coin that is used to
                    invest on the platform.
                    <br/>
                    NMKs, Neufund's token and in the future Startup Tokens,
                    equivalent to equity in ventures, can be purchased using ETH.
                </div>
                <div className={styles.details}>
                    <Balance of="ETH">
                        <Link to="/tutorial">
                            <button className={button.btn}>
                                Buy
                            </button>
                        </Link>
                    </Balance>
                    <Balance of="NMK"/>
                </div>
            </div>
        </Slide>
    );
}

export default BuyEth;