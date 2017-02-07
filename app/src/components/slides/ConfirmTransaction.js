import React from 'react';
import Slide from './Slide';
import styles from './ConfirmTransaction.css';

class ConfirmTransaction extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_on_device">
                <p>Confirm transaction</p>
            </Slide>
        );
    }
}

export default ConfirmTransaction;