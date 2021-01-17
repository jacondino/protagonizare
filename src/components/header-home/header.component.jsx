import React, { useState } from "react";
import Link from "next/link";
import bar from "../../../public/bars.png";
import logo from "../../../public/logo.png";
import "./style.scss";

export const Header = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-home">
      <div className="navbar">
        <div className="menu">
          <a href="#welcome">Wings</a>
          <a href="#rights">Seus direitos</a>
          <a href="#assistance">Assistentes sociais</a>
          <a href="#learn"> O que você aprende?</a>
        </div>
        <img className="logo" src={logo} alt=""/>
      </div>
    </div>
  );
};
