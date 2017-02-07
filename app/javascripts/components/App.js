import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import Index from './Index';

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Index}/>
            </Router>
        )
    }
}

export default App;