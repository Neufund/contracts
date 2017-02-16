import React from 'react';
import styles from './Slide.css';
import {hashHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SlideFooter from './SlideFooter';
import SlideHeader from './SlideHeader';

const Slide = ({linkTo, children}) => {
    const onClick = ()=> {
        if (linkTo) {
            hashHistory.push(linkTo);
        }
    };

    return (
        <MuiThemeProvider>
            <div onClick={onClick}>
                <SlideHeader/>
                <div className={styles.slideContent}>
                    {children}
                </div>
                <SlideFooter/>
            </div>
        </MuiThemeProvider>
    )
};

export default Slide;