import React from "react";
import { NavLink } from 'react-router-dom';

const header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-15 pl-24 bg-black shadow fixed top-0 left-0 right-0 h-20">
        <div>
            <NavLink to="/" className="text-white no-underline pl-30" ><h1>GOTO's PORTFOLIO</h1><p className="text-center">ーエンジニアの部屋ー</p></NavLink>
        </div>
        {/* <nav className="gnavi__pc-style">
          <ul>
            <li><NavLink to="/product" className="product" >開発物</NavLink></li>
            <li><NavLink to="/blog" className="list" >ブログ</NavLink></li>
            <li><NavLink to="/profile" className="profile" >プロフィール</NavLink></li>
          </ul>
        </nav> */}
      </header>
    </div>
  )
}

export default header