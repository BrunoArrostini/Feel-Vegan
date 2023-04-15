import React from "react";
import {Wrapper, Searchbar, NavBrand, SearchWrapper} from "./styles/navbar.styled";
import {BiSearch} from "react-icons/bi"
import {ImLeaf} from "react-icons/im"
import vegan from "../images/vegan.png"

function Navbar() {
return(
     <Wrapper>
       <img src={vegan} style={{
        width:"100%",
        minHeight:"300px",                                                                 
        }}></img>
       <SearchWrapper>
          <BiSearch className="lens"/>
          <Searchbar type= "text" placeholder= "Cosa vuoi mangiare?"></Searchbar>
       </SearchWrapper>                             
       <NavBrand> Feel Vegan <ImLeaf /> </NavBrand> 
     </Wrapper>   
);
}

export default Navbar