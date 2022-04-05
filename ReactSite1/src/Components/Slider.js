import { Carousel } from "react-bootstrap";
import "../styles.css";
import React from "react";
import HeaderCosmosIcon1 from "../assets/HeaderCosmosIcon1.jpg";
import HeaderCosmosIcon2 from "../assets/HeaderCosmosIcon2.jpg";
import HeaderCosmosIcon3 from "../assets/HeaderCosmosIcon3.jpg";

export default function Slider() {
  return (
      <>
     <Carousel>
         <Carousel.Item style={{height:'600px'}}>
                  <img  className="d-block w-100" src={HeaderCosmosIcon1} alt="Error"></img>
                  <Carousel.Caption>
                      <h3>CosmosSlide1</h3>
                      <p>Far far galaxy</p>
                  </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{height:'600px'}}>
                  <img  className="d-block w-100" src={HeaderCosmosIcon2}  alt="Error"></img>
                  <Carousel.Caption>
                      <h3>CosmosSlide2</h3>
                      <p>Far far galaxy</p>
                  </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{height:'600px'}}>
                  <img className="d-block w-100" src={HeaderCosmosIcon3} alt="Error"></img>
                  <Carousel.Caption>
                      <h3>CosmosSlide3</h3>
                      <p>Far far galaxy</p>
                  </Carousel.Caption>
         </Carousel.Item>
     </Carousel>
     </>
  );
}