import React from 'react';
import Slide from './Slide';
import styles from './ConfirmOnDevice.css';
import slideWrapper from './SlideWrapper.css'

class ConfirmOnDevice extends React.Component {
    render() {
        return (
            <Slide linkTo="/success">
                <div className={slideWrapper.wrapper}>
                    <p>Confirm on device</p>
                    <div className={styles.confirm}></div>
                    <div className={styles.details}></div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmOnDevice;