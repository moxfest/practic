import {useLayoutEffect, useState} from "react";const UseTheme = () => {  const [theme,setTheme]=useState('dark')  useLayoutEffect(()=>{    document.documentElement.setAttribute('data-theme',theme)  },[theme])  к};export default UseTheme;