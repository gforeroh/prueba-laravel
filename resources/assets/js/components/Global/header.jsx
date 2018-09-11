import React, { Component } from 'react';


class Header extends Component {
    render() {
        const { userAuth } = this.props;      
               
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">

                        {/* <!-- Collapsed Hamburger --> */}
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        {/* <!-- Branding Image --> */}
                        <a className="navbar-brand" href="/">
                            Laravel
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        {/* <!-- Left Side Of Navbar --> */}
                        <ul className="nav navbar-nav">
                            &nbsp;
                        </ul>

                        {/* <!-- Right Side Of Navbar --> */}
                        <ul className="nav navbar-nav navbar-right">
                            {/* <!-- Authentication Links --> */}
                            {/* @if (Auth::guest()) */}
                                <li><a href="/login">Inicio</a></li>
                                <li><a href="/user/create">Nuevo usuario</a></li>
                            {/* @else */}
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                        {userAuth.name} <span className="caret"></span>
                                    </a>

                                    <ul className="dropdown-menu" role="menu">
                                        <li>
                                            <a href="/logout" >
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            {/* @endif */}
                        </ul>
                    </div>
                
                </div>
            </nav>
        );
    }
}

export default Header;