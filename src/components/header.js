import React from "react";
import { NavLink } from 'react-router-dom';
const header = () => {
    return (
        <div>
            <header>
                <h1><NavLink to="/" className="header_title" >GOTO's PORTFOLIO</NavLink></h1>
                <nav className="gnavi__pc-style">
                    <ul>
                        <li><NavLink to="/product" className="product" >開発物</NavLink></li>
                        <li><NavLink to="/list" className="list" >記事</NavLink></li>
                        <li><NavLink to="/profile" className="profile" >プロフィール</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default header