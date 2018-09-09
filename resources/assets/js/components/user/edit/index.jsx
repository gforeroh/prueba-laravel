import React, { Component } from 'react';
import Show from './show';


class Edit extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            listDocument: null
        }
    }

    handleUpdateClick(id) {
        const apiToken = document.getElementById('api_token').value;
        fetch(`/api/user/${id}`, {
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
                // console.log(user.listDocument);
                              
                this.setState({ user: user.user, listDocument: user.listDocument })          
            })
    }

    componentWillMount() {
        const id = this.props.match.params.id
        
        this.handleUpdateClick(id);
    }

    render() {
        let user = null,
        listDocument = null;
        
        if (this.state.user) {
            user = this.state.user;
            listDocument = this.state.listDocument;
        }
        
        return (
            
            user ? 
                <Show user={user} listDocument={listDocument} /> :
                ''
        );
    }
}

export default Edit;

