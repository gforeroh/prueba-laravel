import React, { Component } from 'react';
import TableUsers from './tableUsers';


class User extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            file: null
        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    handleUpdateClick(){
        const apiToken = document.getElementById('api_token').value;

        fetch('./api/user', {
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
            .then((users) => {
                this.setState({ users })
            })
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

    deleteItem(){
        this.handleUpdateClick();
    }

    render() {
        let users = null, 
            listDocument = null;
   
        if (this.state.users){
            users = this.state.users.users;
            listDocument = this.state.users.listDocument;
        }

        return (
            <div className="container">                                
                <input type="file" name="fileTxt" id="fileTxt" className="btn" onChange={(e) => {
                    const reader = new FileReader()
                    reader.onload = event => {
                        const text = event.target.result
                        this.setState({ file: text })                        
                    }
                    reader.onerror = error => reject(error)
                    reader.readAsText(e.target.files[0]);
                }}/>
                <a href="./user/grilla" className="btn btn-primary"  style={{ marginLeft: '10px' }}>Mostrar grilla</a>   
                <br/><br/>
                { users ? <TableUsers users={users} listDocument={listDocument} /> : '' }
            </div>
        );
    }
}

export default User;