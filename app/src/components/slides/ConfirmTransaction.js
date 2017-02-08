import React from 'react';
import Slide from './Slide';
import styles from './ConfirmTransaction.css';
import slideWrapper from './SlideWrapper.css'

class ConfirmTransaction extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_on_device">
                <div className={slideWrapper.wrapper}>
                    <p>Confirm transaction</p>
                    <div className={styles.details}>

                    </div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmTransaction;