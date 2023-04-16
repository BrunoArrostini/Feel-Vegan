import React from "react";
import {Container, TopWrapper, PicContainer, Title, Description, Time, BottomWrapper, Calories, Protein} from "./styles/card.styled"
import vegan from "../images/vegan.png"

function Card({title, description, time, calories, protein}) {

    return(
        <Container>
            <TopWrapper>
                <PicContainer>
                    <img src={vegan} style={{width:"100%", borderBottom:"0.2px solid lightgray"}} ></img>
                </PicContainer>
                <Title> {title} demo</Title>
                <Description> {description} demo</Description>
                <Time> {time} demo</Time>
            </TopWrapper>
            <BottomWrapper>
                <Calories> {calories} demo</Calories>
                <Protein> {protein} demo</Protein>
            </BottomWrapper>
        </Container>
    )
} 

export default Card;