import React from "react";
import {Container, Searchbar, Label} from "./searchbar.styled.compenent"

function SearchBar() {
return(
    <Container>
          <Label>TYPE IN A FOOD</Label>
          <Searchbar type= "text" ></Searchbar>  
    </Container>
)
}

export default SearchBar;