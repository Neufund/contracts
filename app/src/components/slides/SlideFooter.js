import React from 'react';
import styles from './SlideFooter.css';

class SlideFooter extends React.Component {
    render() {
        return (
            <div className={styles.slideFooter}>
                <a href="/privacy">Privacy</a>
                <a href="/faq">FAQ</a>
                <a href="/support">Support</a>
            </div>
        );
    }
}

export default SlideFooter;