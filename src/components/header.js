import React from "react";
import { NavLink } from 'react-router-dom';
import kurosuke from "../img/kurosuke.gif";

const header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-15 pl-24 bg-black shadow fixed top-0 left-0 right-0 h-20">
        <div>
            <NavLink to="/" className="text-white no-underline pl-30" ><h1 className="header-title">GOTO's PORTFOLIO</h1><p className="text-center">ーエンジニアの部屋ー</p></NavLink>
        </div>
        <img className = "kurosuke-img"src={ kurosuke } alt="Kurosuke" style={{ width: '40px', height: '50px' }} />
      </header>
    </div>
  )
}

export default header