import React from "react";
import Slider from "./Components/Slider";
import {Container,Row,Col,Card,Button}  from "react-bootstrap";
import HeaderCosmosIcon from "./assets/HeaderCosmosIcon.png";
import { render } from "react-dom/cjs/react-dom.production.min";


export default function  Home(){
   
    return(
     <>
     <Slider/>
        <Container style={{paddingTop:"2rem",paddingBottom:"2rem"}}>
            <Row>
                  <Col>
                  <Card style={{width:"18rem"}}>
                          <Card.Img variant="top" src={HeaderCosmosIcon}/>
                          <Card.Body>
                              <Card.Title>Cosmos</Card.Title>
                              <Card.Text>Too little far away</Card.Text>
                          </Card.Body>
                          <Button variant="primary">Learn more</Button>
                  </Card>
                  </Col>
                  <Col>
                  <Card style={{width:"18rem"}}>
                          <Card.Img variant="top" src={HeaderCosmosIcon}/>
                          <Card.Body>
                              <Card.Title>Cosmos</Card.Title>
                              <Card.Text>Too little far away</Card.Text>
                          </Card.Body>
                          <Button variant="primary">Learn more</Button>
                  </Card>
                  </Col>
                  <Col>
                  <Card style={{width:"18rem"}}>
                          <Card.Img variant="top" src={HeaderCosmosIcon}/>
                          <Card.Body>
                              <Card.Title>Cosmos</Card.Title>
                              <Card.Text>Too little far away</Card.Text>
                          </Card.Body>
                          <Button variant="primary">Learn more</Button>
                  </Card>
                  </Col>
            </Row>
        </Container>
        )
    </>
   );
}
    
