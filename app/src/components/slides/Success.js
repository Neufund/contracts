import React from 'react';
import Slide from './Slide';
import styles from './Success.css';

class Success extends React.Component {
    render() {
        return (
            <Slide linkTo="/">
                <p>You're amazing!!!</p>
            </Slide>
        );
    }
}

export default Success;