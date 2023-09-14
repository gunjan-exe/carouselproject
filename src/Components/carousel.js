import React from "react";
import "./carousel.css";
import { useEffect } from "react";
import { useState } from "react";
import { places } from "../Helper/CarouselData";
import { Button } from "@mui/material";
//import Button from "@mui/material/Button";
//import {ArrowBackIos} from "../@mui/icons-material"
//import {ArrowForwardIcon} from "..@mui/icons-material"

function Carousel( { images } ) {
 //const [current, setCurrent] = useState(0);

 
  return (
    <div className="Carousel">
        <div className="Inner" style={{ backgroundImage: `url(${images[3].img})`}}>
        <div className="left"> 
        <ArrowBackIos/>
            </div>
            
            <div className="right">
            
            </div>

        { places.map((image, index) => {
        return <div key={index} className= {index == 3 ?"cards cards-active" : "cards"} > 
            <img className="imgimage" src={ image.image } alt =""  /> 

            <div className="overlay">
                <h2 className="card_title">
                    { image.title }
                </h2>
            </div>   
        </div> 
      })}
        </div>
    </div>
  );
    }
export default Carousel;
