import React from 'react';
import Slide from './Slide';
import styles from './ConfirmTransaction.css';
import slideWrapper from './SlideWrapper.css';
import button from '../Button.css';
import ETHWhite from '../../../images/ETHlogowhite.png';
import NMKWhite from '../../../images/NMKlogowhite.png';

class ConfirmTransaction extends React.Component {
    render() {
        return (
            <Slide linkTo="/confirm_on_device">
                <div className={slideWrapper.wrapper}>
                    <div className={styles.transaction}>
                        <div className={styles.header}>
                            1 ETH = 500 NMK
                        </div>
                        <div className={styles.body}>
                            <div className={styles.eth}>
                                <img src={ETHWhite} alt="ETH"/>
                                <div>100</div>
                            </div>
                            <div className={styles.conversion}>⇄</div>
                            <div className={styles.nmk}>
                                <img src={NMKWhite} alt="NMK"/>
                                <div>50000</div>
                            </div>
                        </div>
                        <div className={styles.confirm}>
                            <button className={button.btn}>Confirm</button>
                        </div>
                    </div>
                    <p className={styles.note}>Note: you would be able to increase your pledge later</p>
                    <div className={styles.details}></div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmTransaction;