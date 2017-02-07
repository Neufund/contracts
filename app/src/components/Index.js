import React from 'react';
import styles from './Index.css';
import {Link} from 'react-router'

class Index extends React.Component {
    render() {
        return (
            <Link to="/welcome">
                <div className={styles.index}></div>
            </Link>
        );
    }
}

export default Index;