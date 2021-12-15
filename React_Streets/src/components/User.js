import React, { Component } from "react";
import { Col, Container,Image,Row } from "react-bootstrap";

class User extends Component {
  nicknameRef = React.createRef();
  passwordRef = React.createRef();
  emailRef = React.createRef();
  descriptionRef=React.createRef();
  tagsRef=React.createRef();
  imgRef=React.createRef();
  render() {
    const handlerSubmit = event => {
      event.preventDefault();
      <>
      <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={this.imgRef} alt="roundedCircle" />
    </Col>
    <Col xs={6} md={4}>
    <p>Nickname: {this.niclnameRef}</p>
        <p>Password: {this.passwordRef}</p>
        <p>Email: {this.emailRef}</p>
        <p>Description: {this.descriptionRef}</p>
        <p>Tags: {this.tagsRef}</p>
    </Col>
  </Row>
</Container>
      </>
    };
    return (
        <form onSubmit={handlerSubmit}>
        <div className="formElement">
          <input
            type="image"
            placeholder="Input image"
            ref={this.imgRef}
            required
          />
        </div>
        <div className="formElement">
          <input
            type="text"
            placeholder="Input nickname"
            ref={this.nicknameRef}
            required
          />
        </div>
        <div className="formElement">
          <input
            type="password"
            placeholder="Input password"
            ref={this.passwordRef}
            required
          />
        </div>
        <div className="formElement">
          <input
            type="text"
            placeholder="Input email"
            ref={this.emailRef}
            required
          />
        </div>
        <div className="formElement">
          <input
            type="text"
            placeholder="Input description"
            ref={this.descriptionRef}
            required
          />
        </div>
        <div className="formElement">
          <input
            type="text"
            placeholder="Input tags"
            ref={this.tagsRef}
            required
          />
        </div>
        <div className="formElement">
          <input type="submit" value="Send data" />
        </div>
      </form>
    );
  }
}
export default User;