import React from "react";
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-15 bg-black shadow fixed top-0 left-0 right-0 h-20">
        <div>
          <Marquee pauseOnHover={true}
        speed={50}>
            <NavLink to="/" className="text-white no-underline pl-30" ><h1>GOTO's PORTFOLIO</h1><p>ーエンジニアの部屋ー</p></NavLink>
          </Marquee>
        </div>
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