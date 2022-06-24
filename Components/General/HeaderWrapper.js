import React, {useState} from 'react';import Link from "next/link";import {useTheme} from "../../hooks/hooks"import {Switch} from "antd";import {SwitchChangeEventHandler, SwitchClickEventHandler, SwitchSize} from "antd/lib/switch";const Header = (props) => {  const {theme,setTheme}=useTheme('yes');const onChange=(check)=>{  console.log(check)}  return (    <div className="header"><div className="container">        <div className="logo">LOGO</div>        <ul className={'abc'}>          <li>            <Link href="/resume"><a >Resume</a></Link>          </li>          <li>            <Link href="/clonium"><a>Game clonium</a></Link>          </li>          <li>            <Link href="/todo"><a>Todo</a></Link>          </li>          <li>            <Link href="/contacts"><a> Contact</a></Link>          </li>        </ul>        <div className="darkmode"><Switch defaultChecked onChange={onChange} />        </div></div>    </div>  )    ;};export default Header;