import React, { Component } from 'react';


class User extends Component {
    constructor() {
        super();
        this.state = {
            users: null
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

        const doSomething = function (event) {
            if (window.confirm('Seguro que quieres eliminar este item?')){
                alert('Se elimino el Item');
            } else {
                event.preventDefault();
            }
        }

        return (
            <div className="container">
                <br/><br/>
                <a href="./user/create" className="btn btn-primary">Nuevo</a>                
                <br/><br/>
                {users ?   
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Tipo documento</th>
                                <th>Documento</th>
                                <th colSpan="2">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => {                
                                return <tr key={i}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{listDocument[user.type_document]}</td>
                                        <td>{user.document}</td>
                                        <td><a href={`/user/edit/${user.id}`} className="btn btn-warning">Editar</a></td>
                                        <td>
                                        <form action={`./api/user/${user.id}`} method="post" onSubmit={doSomething}>
                                                <input name="_method" type="hidden" value="DELETE"></input>
                                            <button className="btn btn-danger" type="submit" >Eliminar</button>
                                            </form>
                                        </td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                :
                    ''
                }
            </div>
        );
    }
}

export default User;

