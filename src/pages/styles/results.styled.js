import styled from "styled-components";

export const Grid = styled.div`
display: grid;
margin: 7rem 3rem;
grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));
grid-gap: 3rem;

@media only screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const Covertitle = styled.h1`
text-align: center;
color: black;
`;

export const Container = styled.div`
border: 1px solid lightgray;
border-bottom: 2px solid lightgray;
border-radius: 5px;
min-width: 230px;
max-width: 230px;
margin-bottom: 50px;
margin-right: 10px;

&:hover{
    transform: scale(1.1);
    border: 3px solid lightgray;
}
`;

export const TopWrapper = styled.div`

`;

export const PicContainer = styled.div`

`;

export const Title = styled.h4`
text-align: center;
align-items: center;
color: gray;
font-weight: 400;
font-size: 1.5rem;
`;

export const BottomWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
`;
