import React from 'react';
import Slide from './Slide';

class Welcome extends React.Component {
    render() {
        return (
            <Slide linkTo="/">
                <div>Welcome</div>
                <div>Mrs Adamovicz</div>
            </Slide>
        );
    }
}

export default Welcome;