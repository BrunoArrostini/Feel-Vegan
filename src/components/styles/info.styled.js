import styled from "styled-components";

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const TopWrapper = styled.div`
display: flex;
justify-content: center;
margin: 30px;
width: auto;
border: 3px solid beige;
border-radius: 15px;

@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 80%;
    margin:0
}
`;

export const BottomWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row-reverse;
margin: 30px;
margin-bottom: 150px;
width: auto;
border: 3px solid beige;
border-radius: 15px;

@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 80%;
}
`;

export const PicContainer = styled.div`
height: 100%;
align-self: center;
width: auto;
background-color: beige;

img{
    height: 300px;
    width: auto;
}

@media (max-width:800px) {
    width: 100%;
  
 img{
    width: 100%;
    height: 250px;
 }   
 } 
`;

export const TextContainer = styled.div`
width: auto;
height: 300px;
overflow-y: scroll;  

`;

export const Text = styled.p`
margin: 15px;
letter-spacing: 0.3pt;
font-weight: 300;
font-family: Arial, Helvetica, sans-serif;

strong{
    color: green;
}
@media (max-width:800px) {
margin:20px ;
 } 
`;