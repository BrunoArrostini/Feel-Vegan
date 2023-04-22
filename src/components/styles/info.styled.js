import styled from "styled-components";

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
margin: 50px;
`;

export const TopWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
`;

export const BottomWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 60px;
`;

export const PicContainer = styled.div`
width: 50%;
height: 100%;
align-self: center;

img{
    height: 300px;
}
`;

export const TextContainer = styled.div`
width: 50%;
margin-right: 40px;
height: 300px;
overflow-y: scroll;
`;

export const Text = styled.p`
margin-top: 15px;

strong{
    color: lightgreen;
}
`;