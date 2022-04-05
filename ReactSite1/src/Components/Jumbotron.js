import React from "react";
import {Container} from "react-bootstrap";
import HeaderCosmosIcon from "../assets/HeaderCosmosIcon.png";
import styled from "styled-components";

const Styles=styled.div `
     .jumbotron{
      background:url(${HeaderCosmosIcon}) no-repeat fixed bottom;
      background-size:cover;
      color:black;
      height:400px;
      position:relativel;
       z-index:-2;
     }
     .overlay{
         background-color:#000;
         opacity:0.7;
         position:absolute;
         top:0;
         left:0;
         bottom:0;
         right:0;
         z-index:-1;
     }
`;

export default function Jumbotron() {
    return(
        <>
        <Styles>
        <div class="jumbotron">
          <div className="overlay"></div>
          <Container>
          <h1>Cosmos traveler</h1>
          <p>Random text</p>
          </Container>
        </div>
        </Styles>
        </>
    );
}
