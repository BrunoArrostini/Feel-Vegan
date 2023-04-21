import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./Main";
import Results from "./Results";


function Pages() {
    return(
        <Routes> 
            <Route path="/main" element={<Main />} ></Route>
            <Route path="/results/:result" element={<Results />}></Route>
        </Routes>
    )
}
export default Pages