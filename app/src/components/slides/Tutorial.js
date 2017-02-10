import React from 'react';
import Slide from './Slide';
import styles from './Tutorial.css';

class Tutorial extends React.Component {
    render() {
        return (
            <Slide linkTo="/buy_tokens">
                <h1>I'm a tutorial</h1>
            </Slide>
        );
    }
}

export default Tutorial;