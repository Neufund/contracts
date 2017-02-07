import React from 'react';
import styles from './Slide.css';
import {browserHistory} from 'react-router'
import NeufundLogo from '../../../images/NeuFund_icon_light.png';

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
                    <img className={styles.logo} src={NeufundLogo}/>
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