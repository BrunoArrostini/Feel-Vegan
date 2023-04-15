import React from "react";
import {Container, Title} from "./styles/main.styled"
import vegan from "../images/vegan.png"

function Main() {
    return(
        <Container>
            <img src={vegan} style={{width:"100%", 
                                    position:"absolute",
                                    top:"0"                                        
                                    }}></img>
            <Title> Piatti più proteici </Title>                        
        </Container>
    )
}

export default Main