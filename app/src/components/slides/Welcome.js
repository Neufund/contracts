import React from 'react';
import Slide from './Slide';

class Welcome extends React.Component {
    render() {
        return (
            <Slide linkTo="/more_info">
                <div>Welcome</div>
                <div>Mrs Adamovicz</div>
                <p>
                    This wizard will guide you through
                    setting up your Neufund wallet and
                    acquiring Neumarks.
                </p>
                <p>
                    If at any point you have any questions
                    please don't hesitate to contact us through
                    the Support page
                </p>
            </Slide>
        );
    }
}

export default Welcome;