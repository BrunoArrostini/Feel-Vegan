import React from "react";
import {Container, IconsWrapper, Info} from "./footer.styled"
import {BiPaperPlane} from "react-icons/bi"
import {Link} from "react-router-dom"
import {GrHomeRounded} from "react-icons/gr"
import {BsInfoCircle} from"react-icons/bs"
import {TiLeaf} from "react-icons/ti"
import {TbLetterV} from "react-icons/tb"
import {CiWheat} from "react-icons/ci"

function Footer() {

  const [isHover, setIsHover] = React.useState(false);

  const handleHover = () =>{
    isHover ? setIsHover(false) : setIsHover(true)
  };

    return(
        <Container>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div>
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
                <div style={{position:"fixed", right:"22px", bottom:"3px"}} onClick={handleHover}>
                  <BsInfoCircle style={{fontSize:"25px", cursor:"pointer"}} />
                </div>
                {isHover && (
                   <Info>
                    <IconsWrapper>
                      <TiLeaf/>
                      <p>Vegan</p>
                    </IconsWrapper>
                    <IconsWrapper>
                      <CiWheat style={{fontSize:"30px"}}/>
                      <p>Gluten Free</p>
                    </IconsWrapper>
                    <IconsWrapper>
                      <TbLetterV/>
                      <p>Vegetarian</p>
                    </IconsWrapper>
                   </Info>
                )}
            </div>
        </Container>
    )
}

export default Footer;