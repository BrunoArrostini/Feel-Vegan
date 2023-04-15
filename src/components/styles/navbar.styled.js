import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100%;
max-height: 400px;
position: relative;
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
`;