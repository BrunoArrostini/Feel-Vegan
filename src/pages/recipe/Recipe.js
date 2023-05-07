import React from "react"
import {useParams} from "react-router-dom"
import { PicContainer, Title, Container, Wrapper, Description, Ingredients, SubTitle} from './recipe.styled';
import {TiLeaf} from "react-icons/ti"
import {TbLetterV} from "react-icons/tb"
import {CiWheat} from "react-icons/ci"
import egg from "../../images/egg.gif"
import axios from "axios";

function Recipe() {
  
   const [recipe, setRecipe] = React.useState({});
   const [ingredients, setIngredients] = React.useState([]);
  

   let param = useParams();
   
   const fetchRecipe = () =>{
        axios.get(`https://api.spoonacular.com/recipes/${param.recipe}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
          const recipes = res
          setRecipe(recipes.data);
          setIngredients(recipes.data.extendedIngredients);
        })
        .catch(err=>{
          return <p>Plaese retry later</p>
        })
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