import React from "react";
import {Wrapper, Searchbar, NavBrand, SearchWrapper, Text, Form} from "./styles/home.styled";
import {BiSearch} from "react-icons/bi"
import {ImLeaf} from "react-icons/im"
import vegan from "../images/vegan.png"
import {useNavigate} from "react-router-dom"


function Home() {

 const [formData, setFormData] = React.useState({data:""});

  
 const handleChange = (e) => {
    setFormData(e.target.value)
  } 
 
  const redirect = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    redirect("/results/" + formData)
  }

 return(
 <>
   <Wrapper>
       <img src={vegan} alt="" style={{
        width: "100%",
        minHeight:"250px"                                                                
        }}></img>
       <SearchWrapper>
          <Form onSubmit={handleSubmit}>
            <BiSearch className="lens" />
            <Searchbar 
              type= "text" 
              name="data"
              value={formData.data}
              onChange={handleChange}
              placeholder= "Search for a food...">
          </Searchbar>
          </Form>
       </SearchWrapper>                             
       <NavBrand> Feel Veg <ImLeaf /> </NavBrand> 
       <Text>Feel free to be yourself</Text>
     </Wrapper>
 </> 
        
);
}

export default Home