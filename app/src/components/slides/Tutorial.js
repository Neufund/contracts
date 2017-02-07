import React from 'react';
import Slide from './Slide';
import styles from './Tutorial.css';

class Tutorial extends React.Component {
    render() {
        return (
            <Slide linkTo="/buy_tokens">
                <p>I'm a tutorial</p>
            </Slide>
        );
    }
}

export default Tutorial;