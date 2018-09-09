import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Lista from './user/lista';

import AppRoutes from '../routes';


/* An example React component */
class Main extends Component {
    render() {
        return (
            <Router>
                <AppRoutes />
            </Router>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
