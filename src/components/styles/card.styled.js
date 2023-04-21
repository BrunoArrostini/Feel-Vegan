import styled from "styled-components";

export const CardContainer = styled.div`
margin: 0;
margin-left: 20px;
margin-right: 20px;
width: 100%;
display: flex;
flex-direction: row;
overflow-x: scroll;
`;

export const Container = styled.div`
border: 2px solid lightgray;
border-bottom: 2px solid lightgray;
border-radius: 5px;
min-width: 230px;
max-width: 230px;
margin-bottom: 50px;
margin-right: 10px;
position: relative;
`;

export const TopWrapper = styled.div`
margin-bottom: 50px;
`;

export const PicContainer = styled.div`
`;

export const Title = styled.h4`
margin-left: 5px;
margin-right: 5px;
color: gray;
font-weight: 400;
`;

export const Vegetarian = styled.h5`
margin-left: 5px;
margin-right: 5px;
font-weight: 100;
font-size: 48px;
border-radius: 30px;
border: 2px dotted gray;
`;

export const Time = styled.p`
margin-left: 5px;
margin-right: 5px;
font-size: 0.8rem;
`;

export const BottomWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 0;
position: absolute;
bottom: 3px;
left: 50%;
right: 50%;
height: 50px;
`;

export const Gluten = styled.h5`
margin-left: 5px;
margin-right: 5px;
font-size: 50px;
border-radius: 30px;
border: 2px dotted gray;
`;

export const Vegan = styled.h5`
margin-left: 5px;
margin-right: 5px;
font-size: 48px;
border-radius: 30px;
border: 2px dotted gray;
`;