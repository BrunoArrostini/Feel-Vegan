import React from 'react'
import Card from '../components/card/Card'
import { Title } from '../components/home/home.styled'
import {TiLeaf} from "react-icons/ti"
import {TbLetterV} from "react-icons/tb"
import {CiWheat} from "react-icons/ci"
import {CardContainer} from "../components/card/card.styled"
import Info from '../components/info/Info'
import { Link} from 'react-router-dom'
import axios from 'axios'
import {AiOutlineLoading} from "react-icons/ai"
import {Loader} from "./recipe/recipe.styled"

function Main() {

  const [loading , setLoading] = React.useState(false);

  console.log(process.env)
    const [recipes, setRecipes] = React.useState([]);
      React.useEffect(() => {
      getRecipes()
      }, []);

     const getRecipes = async () => {
      try{
        setLoading(true);
        const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
        const detail = res.data.recipes;
        setLoading(false);
        setRecipes(detail);
      }
      catch(err){
        setLoading(false);
        console.log(err);
        return <p>Please retry later...</p>
      }
    };

 

  return (
    <div>
      <Title>Find out vegetarian recipes</Title>
      <div className='main'>
        <CardContainer>
           {loading ? <Loader><AiOutlineLoading style={{color:"#99ff99",fontSize:" 150px"}}/></Loader> : recipes.map((recipe)=>{
             return (
             <Link to={"/recipes/" + recipe.id} style={{textDecoration:"none"}}>
                <Card  key={recipe.id} title={recipe.title}  image={recipe.image} name={recipe.title} time={recipe.readyInMinutes} 
                vegan={recipe.vegan ? <TiLeaf style={{color:"green"}} /> : <TiLeaf style={{color: "red"}} />} 
                glutenFree={recipe.glutenFree ? <CiWheat style={{color:"green"}} /> : <CiWheat style={{color:"red"}} /> }  
                vegetarian={<TbLetterV style={{color:"#99ff99"}}/>} /> 
            </Link>
            )})}
        </CardContainer>
      </div>
       <Info />
    </div>
  )
}

export default Main
