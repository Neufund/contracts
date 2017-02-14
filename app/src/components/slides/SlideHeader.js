import React from 'react';
import styles from './SlideHeader.css';
import NeufundLogo from '../../../images/NeuFund_icon_light.png';
import LogOnButton from '../../../images/logonbutton.png';

class SlideHeader extends React.Component {
    render() {
        return (
            <div className={styles.slideHeader}>
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src={NeufundLogo}/>
                </div>
                <div className={styles.menu}>
                    <a href="/mission">Mission</a>
                    <a href="/team">Team</a>
                    <a href="/theICO">The ICO</a>
                    <a href="/invest">Invest</a>
                    <a href="/get_funding">Get Funding</a>
                </div>
                <div className={styles.logOnWrapper}>
                    <img className={styles.logOn} src={LogOnButton}/>
                </div>
            </div>
        );
    }
}

export default SlideHeader;