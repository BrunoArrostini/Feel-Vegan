import axios from 'axios';
import React from 'react'
import {useParams, Link} from "react-router-dom"
import {Container, TopWrapper, PicContainer, Title, BottomWrapper, Grid, Covertitle} from "./results.styled"
import {AiOutlineLoading} from "react-icons/ai"
import {Loader} from "../recipe/recipe.styled"

function Results() {
    
    const [loading , setLoading] = React.useState(false); 
    const [allResults, setAllResults] = React.useState([]);
    let param = useParams();

    const fetchResults = async (name) => {
        try{
            setLoading(true);
            const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
            const details = res.data.results
            setLoading(false);
            setAllResults(details);
        }
        catch(err){
            setLoading(false);
            console.log(err);
            return <p>Please retry later...</p>
        }
    };

    React.useEffect(() => {
        fetchResults(param.result);
        window.scrollTo(150,250);
    }, [param.result]);

  return (
        <>
         <Covertitle>Best Recipes with {param.result}</Covertitle>
            <Grid>
             { loading ? <Loader><AiOutlineLoading style={{color:"#99ff99",fontSize:" 150px"}}/></Loader> : allResults.map((item)=>{
            return (
                <Container key={item.id}>
                  <Link to={"/recipes/" + item.id} style={{textDecoration:"none"}}>
                    <TopWrapper>
                         <PicContainer>
                             <img src={item.image} style={{width:"100%", borderBottom:"0.2px solid lightgray"}} alt={item.name} ></img>
                         </PicContainer>
                    </TopWrapper>
                    <BottomWrapper>
                        <Title> {item.title} </Title>
                    </BottomWrapper>
                  </Link>
                </Container>
            )
        })}
         </Grid>
        </>
     )
}

export default Results