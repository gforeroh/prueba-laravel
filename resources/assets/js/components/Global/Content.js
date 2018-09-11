// Dependencias
import React, { Component } from 'react';
import Header from './header';
// import PropTypes from 'prop-types';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            userAuth: null,
        }
    }

    handleUpdateClick() {
        const apiToken = document.getElementById('api_token').value;     
           
        fetch('/api/auth', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((user) => {   
                this.setState({ userAuth: user })          
            })
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

    render() {
        const { userAuth } = this.state;
        const { body } = this.props;   
        
        return (
        <div className="Content">
            {userAuth ? 
            <Header userAuth={userAuth} />
            : ''}
            {body}
        </div>
        );
    }
}

export default Content;