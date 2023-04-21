import React from 'react'
import Card from '../components/Card'
import {CardContainer} from "../components/styles/card.styled"

function Recipe() {
  
   const [searchRecipe, setSearchRecipe] = React.useState([]);
   
    React.useEffect(()=> {
        getSearch();
    },[]);

   const getSearch = async (name) =>{
        const api = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${`c861de17b1ea4cd8bb78cc92a6cd4859`}&query=${name}`);
        const datas = await api.json();
        setSearchRecipe(datas.results);
        console.log(datas.results);
    };
  
 return (
    <div>
      <CardContainer>
        {searchRecipe.map((item)=>{
         return( <Card key={item.id} image={item.image} /> 
        )}
        )}
      </CardContainer>  
        
    </div>
   )
}

export default Recipe