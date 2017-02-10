import React from 'react';
import Slide from './Slide';
import styles from './BuyEth.css';
import slideWrapper from './SlideWrapper.css'
import Balance from '../Balance';
import button from '../Button.css';
import {Link} from 'react-router';

class BuyEth extends React.Component {
    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>
                    <h1>Your NeuFund wallet has been successfully setup.</h1>
                    <h2>We will proceed with getting and storing some ETH which are then will be used to purchase
                        Neumarks.</h2>
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
}

export default BuyEth;