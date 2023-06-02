import React from "react";
import { NavLink } from 'react-router-dom';
const header = () => {
    return (
        <div>
            <header>
                <NavLink to="/" className="header_title" ><h1>GOTO's PORTFOLIO</h1><p>ーエンジニアの部屋ー</p></NavLink>
                <nav className="gnavi__pc-style">
                    <ul>
                        <li><NavLink to="/product" className="product" >開発物</NavLink></li>
                        <li><NavLink to="/blog" className="list" >ブログ</NavLink></li>
                        <li><NavLink to="/profile" className="profile" >プロフィール</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default header