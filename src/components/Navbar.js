import React from "react";
import {Wrapper, Searchbar, NavBrand, SearchWrapper, Text, Form} from "./styles/navbar.styled";
import {BiSearch} from "react-icons/bi"
import {ImLeaf} from "react-icons/im"
import vegan from "../images/vegan.png"

function Navbar() {

  const [formData, setFormData] = React.useState({data:""})
  
 const handleChange = (e) => {
    setFormData(e.target.value)
  } 
 
 const handleSubmit = (e) => {
    e.preventDefault();
  }

 return(

     <Wrapper>
       <img src={vegan} alt="" style={{
        width: "100%",
        minHeight:"300px"                                                                
        }}></img>
       <SearchWrapper>
          <Form onSubmit={handleSubmit}>
            <BiSearch className="lens" />
            <Searchbar 
              type= "text" 
              name="data"
              value={formData.data}
              onChange={handleChange}
              placeholder= "Cosa vuoi mangiare?">
          </Searchbar>
          </Form>
       </SearchWrapper>                             
       <NavBrand> Feel Vegan <ImLeaf /> </NavBrand> 
       <Text>Feel free to be yourself</Text>
     </Wrapper>   
);
}

export default Navbar