import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 50px;
align-items: center;
`;

export const PicContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

img{
    width: 80%;
    border-radius: 10px;
    border: 2px solid gray;
}
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 10px;
`;

export const Title = styled.h1`
text-align: center;
`;

export const SubTitle = styled.div`
text-align: center;
font-size: 35px;
margin-bottom: 30px;
`;

export const Description = styled.p`
align-items: center;
width: 80%;
margin: auto;
margin-bottom: 25px;
`;

export const Ingredients = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: left;
font-size: 1.3rem ;
align-self: center;
margin-bottom: 100px;

li{
    list-style: none;
}
`;