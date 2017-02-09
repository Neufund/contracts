import React from 'react';
import Slide from './Slide';
import styles from './Success.css';
import slideWrapper from './SlideWrapper.css'
import Balance from '../Balance';

class Success extends React.Component {

    render() {
        return (
            <Slide linkTo="/">
                <div className={slideWrapper.wrapper}>
                    <h3>Transaction complete</h3>
                    <h5>You can now continue to our ICO page and maybe increate your investment from that</h5>
                    <div className={styles.details}>
                        <Balance of="ETH"/>
                        <Balance of="NMK"/>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default Success;