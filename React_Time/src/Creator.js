import React from "react";
import { render } from "react-dom";
import img from "./assets/cat_eyes_256.png";
export default class Creator extends React.Component {
  render() {
    return (
      <>
        <img src={img} alt={this.props.name} />
        <p>Name:{this.props.name}</p>
        <p>Surname:{this.props.surname}</p>
      </>
    );
  }
}
Creator.defaultProps = {
  name: "August",
  surname: "Agrest",
  img: img
};
