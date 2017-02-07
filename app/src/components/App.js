import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import styles from './App.css';
import Index from './Index';
import Welcome from './slides/Welcome';


class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <Router history={browserHistory}>
                    <Route path="/" component={Index}/>
                    <Route path="/welcome" component={Welcome}/>
                </Router>
            </div>
        )
    }
}

export default App;