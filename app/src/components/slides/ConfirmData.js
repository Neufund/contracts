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
                        <span className={styles.name}>Leonid Logvinov</span>
                        <span className={styles.email}>logvinov.leon@gmail.com</span>
                        <span className={styles.phone}>+49 (151) 629-44-829</span>
                        <button className={styles.confirm}>
                            <span>Confirm</span>
                        </button>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmData;