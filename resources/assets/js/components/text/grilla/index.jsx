import React, { Component } from 'react';
import TableText from './tableText';


class Grilla extends Component {
    constructor() {
        super();
        this.state = {
            textos: null,
        }
    }

    handleUpdateClick() {
        const apiToken = document.getElementById('api_token').value;

        fetch('/api/text', {
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
            .then((res) => {
                this.setState({ textos: res })
            })
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

    render() {
        const { textos } = this.state; 
        return (
            <div className="container">
                <a href="/user">Volver al inicio</a>
                {textos ? <TableText textos={ textos } /> : ''}
            </div>
        )
    }
}

export default Grilla;
