import React from "react";
import styled from "styled-components";

export const Container = styled.nav`
height: 70px;
background-color: #99ff99;
display: flex;
justify-content: space-between;
align-items: center;
position: -webkit-sticky;
top: 0;
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
margin-left: 12px;
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
color: white;
font-size: 20px;
font-weight: 700;
margin-right: 10px;
`;
