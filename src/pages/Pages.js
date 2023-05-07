import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./Main";
import Recipe from "./recipe/Recipe";
import Results from "./results/Results";


function Pages() {
    return(
        <Routes> 
            <Route path="/" element={<Main />} ></Route> 
            <Route path="/results/:result" element={<Results />}></Route>
            <Route path="/recipes/:recipe" element={<Recipe />}></Route>
        </Routes>
    )
}
export default Pages
