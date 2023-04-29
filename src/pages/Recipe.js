import React from "react"
import {useParams} from "react-router-dom"
import { PicContainer, Title, Container, Wrapper, Description, Ingredients, SubTitle} from './styles/recipe.styled';
import {TiLeaf} from "react-icons/ti"
import {TbLetterV} from "react-icons/tb"
import {CiWheat} from "react-icons/ci"
import egg from "../images/egg.gif"

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
        console.log(details)
    };

    React.useEffect(() => {
       fetchRecipe();
        // eslint-disable-next-line
      }, [param.recipe]);
  
   return (
    <div>
      <Container key={recipe.id}>
        <PicContainer>
          <img src={recipe.image} alt={recipe.title}></img>
        </PicContainer>
        <Wrapper>
          <Title>{recipe.title}</Title>
          <SubTitle>
              {recipe.vegan ? <TiLeaf style={{color:"green",}}/> : <TiLeaf style={{color:"red"}}/>}
              {recipe.glutenFree ? <CiWheat style={{color:"green"}}/> : <CiWheat style={{color:"red"}}/>}
              <TbLetterV style={{color:"green"}}/>
          </SubTitle>
          <div style={{fontWeight:"500"}}>
            <Description dangerouslySetInnerHTML={{__html: recipe.instructions}}></Description>
          </div>
          <h1 style={{textAlign:"center"}}>Ingredients </h1>
           <Ingredients>
              {ingredients.map((ingredient)=>{
                return(
                  <div style={{display:" flex",flexDirection:"column", border:"1px solid gray", margin:"5px" }} >
                    <div key={ingredient.id}>
                      <img src={egg} alt={""} style={{width:"100px", height:"120px"}}></img>
                    </div>
                    <div>
                      <h6 style={{textAlign:"center"}}>{ingredient.name}</h6>
                    </div>
                  </div>
                )
                })}
          </Ingredients>
        </Wrapper>
      </Container>  
        
    </div>
   )
}

export default Recipe