import React from 'react';
import styles from './Slide.css';
import {hashHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NeufundLogo from '../../../images/NeuFund_icon_light.png';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        hashHistory.push(this.props.linkTo);
    }

    render() {
        return (
            <MuiThemeProvider>
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
            </MuiThemeProvider>
        )
    }
}

export default Slide;