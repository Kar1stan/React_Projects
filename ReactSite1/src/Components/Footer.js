import React from "react";
import {Container} from "react-bootstrap";

export default function Jumbotron() {
    return(
        <Container fluid style={{backgroundColor:"black",color:"dark blue"}}>
                     <Container style={{display:"flex",justifyContent:"center",padding:"10px"}}>
                         <p>Cosmic traveler</p>
                     </Container>
        </Container>
    )
}