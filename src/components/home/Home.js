import React from "react";
import {Wrapper, Searchbar, NavBrand, SearchWrapper, Text, Form} from "./home.styled";
import {BiSearch} from "react-icons/bi"
import {ImLeaf} from "react-icons/im"
import vegan from "../../images/vegan.png"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet-async"

function Home() {

 const [formData, setFormData] = React.useState({data:""});

  
 const handleChange = (e) => {
    setFormData(e.target.value)
  } 
 
  const redirect = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    redirect("/results/" + formData)
  }

 return(
 <>
   <Helmet>
      <title>Feel Veg</title>
      <link rel="icon" type="image/png" href="../../../public/favicon.ico" sizes="16x16" />
      <meta name='description' content='Best vegetarian recipes' />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="title" key="title" content="Feel Veg" />
      <meta property="og:title" key="og:title" content="Feel Veg" />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="Best vegetarian recipes"
      />
      <meta
        property="og:image"
        key="og:image"
        content={vegan}
      />   
   </Helmet> 
   <Wrapper>
       <img src={vegan} alt="" style={{
        width: "100%",
        minHeight:"250px"                                                                
        }}></img>
       <SearchWrapper>
          <Form onSubmit={handleSubmit}>
            <BiSearch className="lens" />
            <Searchbar 
              type= "text" 
              name="data"
              value={formData.data}
              onChange={handleChange}
              placeholder= "Search for a food...">
          </Searchbar>
          </Form>
       </SearchWrapper>                             
       <Link to={"/"}><NavBrand> Feel Veg <ImLeaf /> </NavBrand> </Link>
       <Text>Feel free to be yourself</Text>
     </Wrapper>
 </> 
        
);
}

export default Home