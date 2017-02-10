import React from 'react';
import Slide from './Slide';
import styles from './ConfirmData.css';
import slideWrapper from './SlideWrapper.css'
import button from '../Button.css';
import {Link} from 'react-router';

class ConfirmData extends React.Component {
    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>
                    <h1>Having linked your hardware wallet, we will now set up the digital counterpart of your
                        wallet</h1>
                    <h2>Please confirm your personal details</h2>
                    <div className={styles.details}>
                        <span className={styles.name}>Leonid Logvinov</span>
                        <span className={styles.email}>logvinov.leon@gmail.com</span>
                        <span className={styles.phone}>+49 (151) 629-44-829</span>
                        <Link to="/buy_eth">
                            <button className={button.btn}>
                                <span>Confirm</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmData;