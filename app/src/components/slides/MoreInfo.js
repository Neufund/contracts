import React from 'react';
import Slide from './Slide';
import styles from './MoreInfo.css';
import slideWrapper from './SlideWrapper.css'
import button from '../Button.css';
import {Link} from 'react-router';

class MoreInfo extends React.Component {
    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>
                    <h1>More info on proposal</h1>
                    <ul className={styles.list}>
                        <li>Vision of Neufund</li>
                        <li>Why invest in Neufund</li>
                        <li>What is the purpose of this round?</li>
                        <li>Why paryicipate here and not ICO?</li>
                        <li>Max ticker for this investor</li>
                        <li>Until when can they invest?</li>
                    </ul>
                    <Link to="/connect_ledger">
                        <button className={button.btn}>
                            Got it
                        </button>
                    </Link>
                </div>
            </Slide>
        );
    }
}

export default MoreInfo;