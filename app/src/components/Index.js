import React from 'react';
import styles from './Index.css';
import {Link} from 'react-router'
import NeufundLogo from '../../images/NeuFund_icon_light.png';

class Index extends React.Component {
    render() {
        return (
            <Link to="/welcome">
                <div className={styles.index}>
                    <img className={styles.logo} src={NeufundLogo}/>
                </div>
            </Link>
        );
    }
}

export default Index;