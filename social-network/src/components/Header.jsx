import React from "react";
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <img alt={"logo"} src={"https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=021"}/>
      </div>
    </header>
  )
}

export default Header;