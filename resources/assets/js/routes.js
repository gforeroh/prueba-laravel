// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import List from './components/user/lista';
import Create from './components/user/crear';
import Edit from './components/user/edit';
import Upload from './components/text/upload';
import Grilla from './components/text/grilla';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/user" component={ List } />
            <Route exact path="/user/create" component={ Create } />
            <Route exact path="/user/edit/:id" component={ Edit } />
            <Route exact path="/text/upload" component={ Upload } />
            <Route exact path="/text/grilla" component={ Grilla } />
        </Switch>
    </App>;

export default AppRoutes;