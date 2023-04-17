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
    getRecipes();
 }

 const [recipe, setRecipes] = React.useState([]);
      React.useEffect(() => {
      getRecipes()
      }, []);


     const getRecipes = async () => {
      const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${`c861de17b1ea4cd8bb78cc92a6cd4859`}&number=9&tags=vegetarian`);
      const data = await api.json();
     setRecipes(data.recipes);
    };

 return(

     <Wrapper>
       <img src={vegan} style={{
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
       <Text>Liberi di essere sè stessi</Text>
     </Wrapper>   
);
}

export default Navbar