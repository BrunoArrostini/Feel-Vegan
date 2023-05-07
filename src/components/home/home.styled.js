import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100%;
max-height: 450px;
position: relative;
`;

export const Form = styled.form`
`;

export const SearchWrapper = styled.div`
position: absolute;
left: 20px;
top: 20px;
`;

export const Searchbar = styled.input`
width: 220px;
height: 35px;
border-radius: 18px;
border: none;
text-indent: 30px;
font-size:15px;
font-family: "Toke", sans-serif;
font-weight: 600;

&:focus{
outline:none;
}  
`;

export const NavBrand = styled.h1`
font-size: 25px;
font-weight: 500;
position: absolute;
right: 10px;
top: 20px;
color: black;
text-shadow: 1px 2px white;
`;

export const Text = styled.h2`
color: white;
font-weight: 400;
font-size: 60px;
position: absolute;
bottom: 40%;
left: 7%;
text-shadow: 1px 2px black;

@media (max-width: 720px){
    font-size: 30px;
}

`;

export const Title = styled.h1`
font-weight: 500;
margin-left: 30px;
margin-top: 20px;
`;