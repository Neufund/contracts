import React from 'react';
import Slide from './Slide';
import styles from './MoreInfo.css';
import slideWrapper from './SlideWrapper.css'

class MoreInfo extends React.Component {
    render() {
        return (
            <Slide linkTo="/connect_ledger">
                <div className={slideWrapper.wrapper}>
                    <div>More info on proposal</div>
                    <ul className={styles.list}>
                        <li>Vision of Neufund</li>
                        <li>Why invest in Neufund</li>
                        <li>What is the purpose of this round?</li>
                        <li>Why paryicipate here and not ICO?</li>
                        <li>Max ticker for this investor</li>
                        <li>Until when can they invest?</li>
                    </ul>
                </div>
            </Slide>
        );
    }
}

export default MoreInfo;