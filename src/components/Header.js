import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import './styles/Header.css'

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="images/headerLogo.png"  alt="logo" />
      <div className="header__Search">
        <SearchIcon className="header__SearchIcon" />
        <span className="header__SearchName">Search</span>
        <span className="header__SearchName">Help</span>
        <span className="header__SearchName">Account</span>
        <div className="bagIcon">
        <LocalMallIcon/>
        </div>
      </div>
    </div>
  );
}

export default Header;
