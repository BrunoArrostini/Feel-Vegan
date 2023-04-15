import React from "react";
import {Container, TopWrapper, PicContainer, Title, Description, Time, BottomWrapper, Calories, Protein} from "./styles/card.styled"

function Card() {
    return(
        <Container>
            <TopWrapper>
                <PicContainer>
                </PicContainer>
                <Title></Title>
                <Description></Description>
                <Time></Time>
            </TopWrapper>
            <BottomWrapper>
                <Calories></Calories>
                <Protein></Protein>
            </BottomWrapper>
        </Container>
    )
} 

export default Card;