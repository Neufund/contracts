import React from 'react';
import Slide from './Slide';
import styles from './Welcome.css'
import slideWrapper from './SlideWrapper.css'
import button from '../Button.css';
import {Link} from 'react-router';

class Welcome extends React.Component {
    render() {
        return (
            <Slide>
                <div className={slideWrapper.wrapper}>
                    <h1 className={styles.header}>Welcome</h1>
                    <h1 className={styles.header}>Mr Logvinov</h1>
                    <h2>
                        This wizard will guide you through
                        setting up your Neufund wallet and
                        acquiring Neumarks.
                    </h2>
                    <h3>
                        If at any point you have any questions
                        please don't hesitate to contact us through
                        the Support page
                    </h3>
                    <Link to="/more_info">
                        <button className={button.btn}>
                            Let's go!
                        </button>
                    </Link>
                </div>
            </Slide>
        );
    }
}

export default Welcome;