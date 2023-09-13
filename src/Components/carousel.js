import React, { useState, useEffect } from "react";
import "./carousel.css";
import { places } from "../Helper/CarouselData";

function Carousel( { images } ) {
 // const [current, setCurrent] = useState(0);

 // useEffect(() => {
    // Fetch the images data
    // No need to fetch the data again because the images data is already defined in carouseldata.js
 // }, []);

  return (
    <div className="Carousel">
   
        <div className="Inner" >
        <div className="left"> 
       
            </div>
            
            <div className="right">
            
            </div>

        { places.map((image, index) => {
        return <div key={index} className= {index == 0 ?"cards cards-active" : "cards"} > 
            <img className="imgimage" src={ '/src/Images/${image.image}'} alt ="" style={{ width: '600px', height: '500px' }} /> 

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