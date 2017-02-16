import React from 'react';
import styles from './LoginHeader.css';
import NeufundLogo from '../../../images/NeuFund_icon_light.png';
import SettingsIcon from '../../../images/settings-2.png';

class LoginHeader extends React.Component {
    render() {
        return (
            <div className={styles.slideHeader}>
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src={NeufundLogo}/>
                </div>
                <div className={styles.settingsWrapper}>
                    <div className={styles.name}>Leonid Logvinov</div>
                    <img className={styles.settings} src={SettingsIcon}/>
                </div>
            </div>
        );
    }
}

export default LoginHeader;