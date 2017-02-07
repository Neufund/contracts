import React from 'react';
import Slide from './Slide';
import styles from './ConfirmData.css';
import slideWrapper from './SlideWrapper.css'

class ConfirmData extends React.Component {
    render() {
        return (
            <Slide linkTo="/buy_eth">
                <div className={slideWrapper.wrapper}>
                    <p>Having linked your hardware wallet, we will now set up the digital counterpart of your wallet</p>
                    <p>Please confirm your personal details</p>
                    <div className={styles.details}>

                    </div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmData;