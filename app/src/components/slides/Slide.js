import React from 'react';
import styles from './Slide.css';
import {browserHistory} from 'react-router'

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        browserHistory.push(this.props.linkTo);
    }

    render() {
        return (
            <div onClick={this.onClick} className={styles.slide}>
                <div className={styles.slideHeader}>
                    <a href="/about">About</a>
                    <a href="/faq">FAQ</a>
                    <a href="/support">Support</a>
                </div>
                <div className={styles.slideContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Slide;