import React,{ useState,createContext}from "react";
import PropTypes from 'prop-types';


export const ThemeContext = createContext({theme:'light',undefined});
export const ThemeProvider =(props)=>{
  const{children}=props
  const [theme,setTheme]=useState('light');
  return <ThemeContext.Provider value={{theme,setTheme}}>
    {children}
  </ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.string.isRequired, // Add the missing prop type validation
};