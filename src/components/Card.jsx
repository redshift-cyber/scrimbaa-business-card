import React from "react";
import Top from "./Top";
import About from "./About";
import Interests from "./Interests";
import Footer from "./footer";

export default function Card(){
    return(
            <div className="card">
                <Top  />
                <About />
                <Interests />
                <Footer />
            </div>
    )
}