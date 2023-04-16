import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import {Title, CardContainer} from "./components/styles/navbar.styled"
import {nanoid} from "nanoid"
import React from 'react';

function App() {

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

     const Cards = recipe.map((recipe=>{
      <Card key={nanoid} title={recipe.name}  />
    }))

  return (
    <div className="App">
     <Navbar />
     <Title>Title demo blablabla</Title>
     <div className='main'>
      <CardContainer>
        {Cards}
      </CardContainer>
     </div>
     <Footer />
    </div>
  );
}

export default App;