import React from 'react';
import Slide from './Slide';
import styles from './BuyEth.css';

class BuyEth extends React.Component {
    render() {
        return (
            <Slide linkTo="/tutorial">
                <div className={styles.wrapper}>
                    <p>Your NeuFund wallet has been successfully setup.</p>
                    <p>We will proceed with getting and storing some ETH which are then will be used to purchase
                        Neumarks.</p>
                    <div className={styles.details}></div>
                </div>
            </Slide>
        );
    }
}

export default BuyEth;