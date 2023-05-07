import axios from 'axios';
import React from 'react'
import {useParams, Link} from "react-router-dom"
import {Container, TopWrapper, PicContainer, Title, BottomWrapper, Grid, Covertitle} from "./results.styled"

function Results() {

    const [allResults, setAllResults] = React.useState([]);
    let param = useParams();

    const fetchResults = (name) => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        .then(res=>{
            const details = res.data.results
           setAllResults(details); 
        })
        .catch(err=>{
            return <p>Please retry later...</p>
        })
    };

    React.useEffect(() => {
        fetchResults(param.result);
        window.scrollTo(150,250);
    }, [param.result]);

  return (
        <>
         <Covertitle>Best Recipes with {param.result}</Covertitle>
            <Grid>
             {allResults.map((item)=>{
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