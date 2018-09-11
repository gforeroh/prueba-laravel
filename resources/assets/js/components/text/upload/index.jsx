import React, { Component } from 'react';


class Upload extends Component {
    constructor() {
        super();
        this.state = {
            userAuth: null,
            characters: '',
            msg: ''
        }
    }

    componentWillMount() {
        const apiToken = document.getElementById('api_token').value;
        console.log(apiToken, "WillMount");
        
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

    onInputChange(e) {     
        const reader = new FileReader()
        reader.onload = event => {
            const text = event.target.result
            this.setState({ characters: text, msg: ''})
        }
        reader.onerror = error => reject(error)
        reader.readAsText(e.target.files[0]);

        e.preventDefault();
    }

    onSubmit(e) {
        const apiToken = document.getElementById('api_token').value;
        console.log(apiToken);
        
        const { userAuth, characters} = this.state;
        
        var data = { characters: characters, 'user_id': userAuth.id };
        fetch('/api/text', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${apiToken}`
            },
        })
            .then((response) => {
                // console.log(response);
                return response.json()
            })
            .then((res) => {
                console.log(res);
                
                this.setState({ msg: 'Caracteres guardados correctamente' })
            })
            

        e.preventDefault();
    }

    render() {
        const { msg } = this.state;
        return (
            <div className="container">                
                <form method="post" onSubmit={this.onSubmit.bind(this)}>
                    <input type="file" name="fileTxt" id="fileTxt" className="btn" onChange={this.onInputChange.bind(this)} /> 
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </form>
                {msg ? <label>{msg}</label> : ''}   
                <div className="row">
                    <br/>
                    <a href="/text/grilla" className="btn btn-primary" style={{ marginLeft: '10px' }}>Mostrar grilla</a>
                </div>         
            </div>
        )
    }
}

export default Upload;
