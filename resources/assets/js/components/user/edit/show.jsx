import React, { Component } from 'react';



class Show extends Component {
    
    


    render() {
        const { listDocument, user } = this.props;   
        const { id } = user;
        return (
            <div className="container">
                <br /><br />
                <form method="post" action={`/api/user/${id}`}>
                    <div className="form-group row">
                        <label htmlFor="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Nombre-Edit</label>
                        <div className="col-sm-6">
                            <input type="text" name="name" className="form-control form-control-sm" id="lgFormGroupInput" placeholder="Nombre" defaultValue={user.name} required="required" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Tipo de documento</label>
                        <div className="col-sm-6">
                            <select name="type_document" id="inputtype_document" className="form-control" defaultValue={user.type_document} required="required">
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
                            <input type="text" name="document" id="inputdocument" className="form-control form-control-sm" defaultValue={user.document} required="required" title="" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                        <div className="col-sm-6">
                            <input type="email" name="email" id="inputemail" className="form-control form-control-sm" defaultValue={user.email} required="required" title="" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
                        <div className="col-sm-6">
                            <input type="password" name="password" id="inputpassword" className="form-control form-control-sm" defaultValue="" title="" />
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

export default Show;

