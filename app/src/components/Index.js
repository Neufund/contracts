import React from 'react';
import styles from './Index.css';
import {Link} from 'react-router'
import NeufundLogo from '../../images/NeuFund_icon_light.png';

class Index extends React.Component {
    render() {
        return (
            <div className={styles.index}>
                <Link to="/welcome">
                    <img className={styles.logo} src={NeufundLogo}/>
                </Link>
            </div>
        );
    }
}

export default Index;