import React from 'react'
import Card from '../components/Card'
import { Title } from '../components/styles/home.styled'
import {TiLeaf} from "react-icons/ti"
import {TbLetterV} from "react-icons/tb"
import {CiWheat} from "react-icons/ci"
import {CardContainer} from "../components/styles/card.styled"
import Info from '../components/Info'

function Main() {

    const [recipes, setRecipes] = React.useState([]);
      React.useEffect(() => {
      getRecipes()
      }, []);

     const getRecipes = async () => {
      const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${`c861de17b1ea4cd8bb78cc92a6cd4859`}&number=9&tags=vegetarian`);
      const data = await api.json();
      setRecipes(data.recipes);
    };

  return (
    <div>
      <Title>Find out vegetarian recipes</Title>
      <div className='main'>
        <CardContainer>
           {recipes.map(recipe=> (
             <Card  key={recipe.id} title={recipe.title}  image={recipe.image} name={recipe.title} time={recipe.readyInMinutes} 
              vegan={recipe.vegan ? <TiLeaf style={{color:"green"}} /> : <TiLeaf style={{color: "red"}} />} 
              glutenFree={recipe.glutenFree ? <CiWheat style={{color:"green"}} /> : <CiWheat style={{color:"red"}} /> }  
              vegetarian={<TbLetterV style={{color:"#99ff99"}}/>}  />
            ))}
        </CardContainer>
       
      </div>
       <Info />
    </div>
  )
}

export default Main
