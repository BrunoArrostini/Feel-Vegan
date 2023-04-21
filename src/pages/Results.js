import React from 'react'
import {useParams} from "react-router-dom"
import {Container, TopWrapper, PicContainer, Title, BottomWrapper, Grid, Covertitle} from "./styles/results.styled"

function Results() {

    const [allResults, setAllResults] = React.useState([]);
    let param = useParams();

    const fetchResults = async (name) => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${`c861de17b1ea4cd8bb78cc92a6cd4859`}&query=${name}`
        );
        const datas = await api.json();
        setAllResults(datas.results);
        console.log(datas.results)
    };

    React.useEffect(() => {
        fetchResults(param.result);
    }, [param.result]);

  return <Grid>
         <Covertitle>Best Recipes with {param.result}</Covertitle>   
        {allResults.map((item)=>{
            return (
                <Container>
                    <TopWrapper>
                         <PicContainer>
                             <img src={item.image} style={{width:"100%", borderBottom:"0.2px solid lightgray"}} alt={item.name} ></img>
                         </PicContainer>
                    </TopWrapper>
                    <BottomWrapper>
                        <Title> {item.title} </Title>
                    </BottomWrapper>
                </Container>
            )
        })}
    </Grid>
}

export default Results