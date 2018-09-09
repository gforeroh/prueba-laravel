import React, { Component } from 'react';


class Crear extends Component {
    constructor() {
        super();
        this.state = {
            listDocument: null
        }
    }

    handleUpdateClick() {
        const apiToken = document.getElementById('api_token').value;
        fetch('/api/user/create', {
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
            .then((listDocument) => {
                this.setState({ listDocument })
            })
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

    render() {
        let user = null,
            listDocument = null;

        if (this.state.listDocument) {
            user = this.state.user;
            listDocument = this.state.listDocument.listDocument;              
        }

        return (
            <div className="container">
                <br/><br/>
                <form method="post" action="/api/user">
                    <div className="form-group row">
                        <label htmlFor="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Nombre</label>
                        <div className="col-sm-6">
                            <input type="text" name="name" className="form-control form-control-sm" id="lgFormGroupInput" placeholder="Nombre" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Tipo de documento</label>
                        <div className="col-sm-6">
                            <select name="type_document" id="inputtype_document" className="form-control" defaultValue="" required="required">
                                <option defaultValue="">-- Seleccione uno --</option>
                                {
                                    listDocument ?                                    
                                        Object.keys(listDocument).map(key => {
                                            return <option key={key} value={key} >{listDocument[key]}</option>
                                        })
                                        :
                                        ''
                                }
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Documento</label>
                        <div className="col-sm-6">
                            <input type="text" name="document" id="inputdocument" className="form-control form-control-sm" defaultValue="" required="required" title="" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                        <div className="col-sm-6">
                            <input type="email" name="email" id="inputemail" className="form-control form-control-sm" defaultValue="" required="required" title="" />        
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
                        <div className="col-sm-6">
                            <input type="password" name="password" id="inputpassword" className="form-control form-control-sm" defaultValue="" required="required" title="" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-2"></div>
                        <input type="submit" className="btn btn-primary" />
                    </div>
                </form>
                <a href="/user">Volver al inicio</a>
            </div>
        );
    }
}

export default Crear;

