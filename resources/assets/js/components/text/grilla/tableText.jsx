import React, { Component } from 'react';


class TableText extends Component {
    render(){
        const { textos } = this.props; 
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Texto</th>
                        <th>Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {textos.map((texto, i) => {                
                        return <tr key={i}>
                                <td>{texto.id}</td>
                                <td>{texto.characters}</td>
                                <td>{texto.user.name}</td>                                
                            </tr>
                    })}
                </tbody>
            </table>        
        )
    }
    
}

export default TableText;