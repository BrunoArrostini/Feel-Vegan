import React from "react";
import {Container ,NavBrand, Searchbar} from "./styles/navbar.styled";
import { Wrapper } from "./styles/navbar.styled";
import {BiSearch} from "react-icons/bi"

function Navbar() {
return(
<Container>
   <Wrapper>
      <BiSearch className="lens"/>
      <Searchbar type= "text" placeholder="What you'd like to eat?"></Searchbar>
   </Wrapper>
   <NavBrand> Feel Vegan </NavBrand> 
</Container>
);
}

export default Navbar