import React from "react"
import {useParams} from "react-router-dom"
import { PicContainer, Title, Container, Wrapper, Description, Ingredients } from './styles/recipe.styled';

function Recipe() {
  
   const [fullRecipe, setFullRecipe] = React.useState([]);

   let param = useParams();
   
   const fetchRecipe = async () =>{
        const res = await fetch (
          `https://api.spoonacular.com/recipes/${param.recipe}/information?apiKey=${`c861de17b1ea4cd8bb78cc92a6cd4859`}`);
        const details = await res.json();
        setFullRecipe(details);
        console.log(details)
    };

    React.useEffect(() => {
       fetchRecipe();
    }, );
  
   return (
    <div>
      <Container>
        <PicContainer>
          <img src={fullRecipe.image} alt={fullRecipe.title}></img>
        </PicContainer>
        <Wrapper>
          <Title>{fullRecipe.title}</Title>
          <Description>{fullRecipe.summary}</Description>
          <h1>Ingredients</h1>
          <Ingredients>
            <ul>
                 
            </ul>
            </Ingredients>
        </Wrapper>
      </Container>  
        
    </div>
   )
}

export default Recipe