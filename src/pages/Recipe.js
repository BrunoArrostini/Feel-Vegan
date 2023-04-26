import React from "react"
import {useParams} from "react-router-dom"
import { PicContainer, Title, Container, Wrapper, Description, Ingredients } from './styles/recipe.styled';
import {FcCheckmark} from "react-icons/fc"

function Recipe() {
  
   const [fullRecipe, setFullRecipe] = React.useState({});

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
       // eslint-disable-next-line
      }, [param.recipe]);
  
   return (
    <div>
      <Container>
        <PicContainer>
          <img src={fullRecipe.image} alt={fullRecipe.title}></img>
        </PicContainer>
        <Wrapper>
          <Title>{fullRecipe.title}</Title>
          <div>
          <Description dangerouslySetInnerHTML={{__html: fullRecipe.summary}}></Description>
          </div>
          <h1 style={{textAlign:"center"}}>Ingredients </h1>
          <Ingredients>
            <ul>
                {fullRecipe.extendedIngredients.map((ingredient=>{
                  return <li key={ingredient.id}> <FcCheckmark style={{fontSize:"0.9rem"}}/> {ingredient.originalName}</li>
                }))} 
            </ul>
            </Ingredients>
        </Wrapper>
      </Container>  
        
    </div>
   )
}

export default Recipe