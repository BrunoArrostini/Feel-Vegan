import React from "react";
import styled from "styled-components";

export const Container = styled.nav`
height: 50px;
background-color: #99ff99;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
margin-left: 10px;
`;

export const Searchbar = styled.input`
width: 220px;
height: 25px;
border-radius: 12px;
border: none;
text-indent: 20px;

&:focus{
outline:none;  
`;

export const NavBrand = styled.h1`
color: white;
font-size: 25px;
font-weight: 700;
margin-right: 8px;
`;
