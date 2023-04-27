import React from "react";
import {Container} from "./styles/footer.styled"
import {BiPaperPlane} from "react-icons/bi"
import {Link} from "react-router-dom"

function Footer() {
    return(
        <Container>
            <div>
               <Link to={"https://brunoarrostini.github.io"} style={{textDecoration:"none", color:"black"}}><p>Bruno Arrostini <BiPaperPlane style={{fontSize:"16px"}}/> </p></Link>  
            </div>
        </Container>
    )
}

export default Footer;