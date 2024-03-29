import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./Profile logo transprent.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename} >
        
        <h3>
          <a href="#home" >
           
           
          </a>
        </h3>
    
        <Navbar />
       
      
      </header>
    </>
  );
};