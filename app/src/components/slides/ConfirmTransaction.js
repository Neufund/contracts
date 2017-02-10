import React from 'react';
import Slide from './Slide';
import styles from './ConfirmTransaction.css';
import slideWrapper from './SlideWrapper.css';
import button from '../Button.css';
import ETHWhite from '../../../images/ETHlogowhite.png';
import NMKWhite from '../../../images/nmklogowhite.png';
import {Link} from 'react-router';

class ConfirmTransaction extends React.Component {
    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>
                    <div className={styles.transaction}>
                        <div className={styles.header}>
                            <span>1 ETH = 500 NMK</span>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.eth}>
                                <img src={ETHWhite} alt="ETH"/>
                                <div>1</div>
                            </div>
                            <div className={styles.conversion}>⇄</div>
                            <div className={styles.nmk}>
                                <img src={NMKWhite} alt="NMK"/>
                                <div>500</div>
                            </div>
                        </div>
                        <div className={styles.confirm}>
                            <Link to="/confirm_on_device">
                                <button className={button.btn}>Confirm</button>
                            </Link>
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