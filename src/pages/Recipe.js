import React from "react"
import {useParams} from "react-router-dom"
import { PicContainer, Title, Container, Wrapper, Description, Ingredients, SubTitle} from './styles/recipe.styled';
import {FcCheckmark} from "react-icons/fc"
import {TiLeaf} from "react-icons/ti"
import {TbLetterV} from "react-icons/tb"
import {CiWheat} from "react-icons/ci"

function Recipe() {
  
   const [recipe, setRecipe] = React.useState({});
   const [ingredients, setIngredients] = React.useState([]);

   let param = useParams();
   
   const fetchRecipe = async () =>{
        const res = await fetch (
          `https://api.spoonacular.com/recipes/${param.recipe}/information?apiKey=${`c861de17b1ea4cd8bb78cc92a6cd4859`}`);
        const details = await res.json();
        setRecipe(details);
        setIngredients(details.extendedIngredients);
    };

    React.useEffect(() => {
       fetchRecipe();
        // eslint-disable-next-line
      }, [param.recipe]);
  
   return (
    <div>
      <Container>
        <PicContainer>
          <img src={recipe.image} alt={recipe.title}></img>
        </PicContainer>
        <Wrapper>
          <Title>{recipe.title}</Title>
          <SubTitle>
              {recipe.vegan ? <TiLeaf style={{color:"green"}}/> : <TiLeaf style={{color:"red"}}/>}
              {recipe.glutenFree ? <CiWheat style={{color:"green"}}/> : <CiWheat style={{color:"red"}}/>}
              <TbLetterV style={{color:"green"}}/>
          </SubTitle>
          <div>
            <Description dangerouslySetInnerHTML={{__html: recipe.summary}}></Description>
          </div>
          <h1 style={{textAlign:"center"}}>Ingredients </h1>
          <Ingredients>
            <ul>
            {ingredients.map((ingredient)=>
                 <li key={ingredient.id}> <FcCheckmark style={{fontSize:"0.9rem"}}/> {ingredient.originalName}</li>
                )}
            </ul>
            </Ingredients>
        </Wrapper>
      </Container>  
        
    </div>
   )
}

export default Recipe