import React from "react";
import Creator from "./Creator";
import Time from "./Time";
export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  showDescription = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    const {
      data: { model, year, img, price, description }
    } = this.props;
    return (
      <>
        <img src={img} alt={model} />
        <p style={{ color: "green", backgroundColor: "black" }}>
          Model {model}
        </p>
        <p>Year {year}</p>
        <p>Цена {price} </p>
        {this.state.isShow === true ? <p>{description}</p> : null}
        <button type="button" onClick={this.showDescription}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>
        <Creator />
        <Time/>
      </>
    );
  }
}
