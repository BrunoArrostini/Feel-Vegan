import styled from "styled-components";

export const Container = styled.footer`
height: 50px;
background-color: #99ff99;
position: fixed;
bottom: 0;
width: 100%;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Info = styled.div`
background-color: white;
position: fixed;
bottom: 50px;
right: 3px;
left: 3px;
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
border-radius: 10px;
border: 1px solid #99ff99;
`;

export const IconsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 5px;
align-items: center;
`;
