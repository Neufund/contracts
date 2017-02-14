import React from 'react';
import styles from './Slide.css';
import {hashHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SlideFooter from './SlideFooter';
import SlideHeader from './SlideHeader';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.linkTo) {
            hashHistory.push(this.props.linkTo);
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SlideHeader/>
                    <div className={styles.slideContent}>
                        {this.props.children}
                    </div>
                    <SlideFooter/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Slide;