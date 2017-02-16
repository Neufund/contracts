import React from 'react';
import LoginHeader from './LoginHeader';
import LogoutHeader from './LogoutHeader';

class SlideHeader extends React.Component {
    render() {
        if (1) {
            return <LoginHeader/>;
        } else {
            return <LogoutHeader/>;
        }
    }
}

export default SlideHeader;