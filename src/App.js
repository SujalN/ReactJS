import './App.css';

import React from "react"
import Navbar from "./Components/Nav"
import Main from "./Components/Main"
export default function app(){
    return(
        <div className="container">
            <Navbar />
            <Main/>
        </div>
    )
}
