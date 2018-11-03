// Header.js
import React, { Component } from 'react';
var image = 'images/logo.png';

class Header extends Component {
    render() {
        if(this.props.data){
            var menus = this.props.data.topmenuItems.map(function(menu) {
                return <li key={menu.name}><a href={menu.url}><i className={menu.className}></i>{menu.name}</a></li>
            });
        }
        return (
            <div>
                <header className="s-header">
                    <div className="header-logo">
                        <a className="site-logo" href="index.html">Pubit</a>
                    </div>

                    <nav className="header-nav-wrap">
                        <ul className="header-nav">
                            {menus}
                        </ul>
                    </nav>

                    <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

                </header>
            </div>
        );
    }
}

export default Header;