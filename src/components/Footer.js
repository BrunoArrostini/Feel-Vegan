import React from "react";
import {Container} from "./styles/footer.styled"
import {BiPaperPlane} from "react-icons/bi"
import {Link} from "react-router-dom"
import {GrHomeRounded} from "react-icons/gr"

function Footer() {
    return(
        <Container>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{}}>
                  <Link to={"/"} style={{textDecoration:"none", color:"black", alignSelf:"center", position:"fixed", bottom:"0", left:"22px"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                      <GrHomeRounded style={{fontSize:"20px"}}/>
                      <p style={{fontSize:"15px"}}>Home</p> 
                    </div>  
                  </Link> 
                </div>
                <div>
                  <Link to={"https://brunoarrostini.github.io"} style={{textDecoration:"none", color:"black"}}><p>Bruno Arrostini <BiPaperPlane style={{fontSize:"16px"}}/> </p></Link>
                </div> 
            </div>
        </Container>
    )
}

export default Footer;