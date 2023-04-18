import React from "react";
import {Container, TopWrapper, PicContainer, Title, Vegetarian,
     Time, BottomWrapper, Gluten , Vegan} from "./styles/card.styled"

function Card({title, image, vegan, time, glutenFree, vegetarian, name}) {

    return(
        <Container>
            <TopWrapper>
                <PicContainer>
                    <img src={image} style={{width:"100%", borderBottom:"0.2px solid lightgray"}} alt={name} ></img>
                </PicContainer>
                <Title> {title} </Title>
                <Time> {time}' minutes </Time>
            </TopWrapper>
            <BottomWrapper>
                <Vegetarian> {vegetarian} </Vegetarian>
                <Gluten> {glutenFree} </Gluten>
                <Vegan> {vegan} </Vegan>
            </BottomWrapper>
        </Container>
    )
} 

export default Card;