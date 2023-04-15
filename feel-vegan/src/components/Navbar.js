import React from "react";
import {Container ,NavBrand, Searchbar, Wrapper} from "./styles/navbar.styled";
import {BiSearch} from "react-icons/bi"
import {ImLeaf} from "react-icons/im"

function Navbar() {
return(
<Container>
   <Wrapper>
      <BiSearch className="lens"/>
      <Searchbar type= "text" placeholder="Cosa vuoi mangiare?"></Searchbar>
   </Wrapper>
   <NavBrand> Feel Vegan <ImLeaf /> </NavBrand> 
</Container>
);
}

export default Navbar