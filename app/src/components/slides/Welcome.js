import React from 'react';
import Slide from './Slide';
import styles from './Welcome.css'
import slideWrapper from './SlideWrapper.css'

class Welcome extends React.Component {
    render() {
        return (
            <Slide linkTo="/more_info">
                <div className={slideWrapper.wrapper}>
                    <h1 className={styles.header}>Welcome</h1>
                    <h1 className={styles.header}>Mrs Adamovicz</h1>
                    <p>
                        This wizard will guide you through
                        setting up your Neufund wallet and
                        acquiring Neumarks.
                    </p>
                    <h6>
                        If at any point you have any questions
                        please don't hesitate to contact us through
                        the Support page
                    </h6>
                </div>
            </Slide>
        );
    }
}

export default Welcome;