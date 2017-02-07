import React from 'react';
import Slide from './Slide';
import styles from './ConfirmOnDevice.css';

class ConfirmOnDevice extends React.Component {
    render() {
        return (
            <Slide linkTo="/success">
                <p>Confirm on device</p>
            </Slide>
        );
    }
}

export default ConfirmOnDevice;