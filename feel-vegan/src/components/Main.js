import React from "react";
import {Container} from "./styles/main.styled"
import vegan from "../images/vegan.png"

function Main() {
    return(
        <Container>
            <img src={vegan} ></img>
        </Container>
    )
}

export default Main