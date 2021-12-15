import React from "react";
export default class Film extends React.Component {
  render() {
    const {
      data: { name, director, poster_image,filmcompany,  year_of_relize}
    } = this.props;
    return (
      <>
        <img src={poster_image} alt={name} />
        <p>Name:{name}</p>
        <p>director:{director}</p>
        <p>filmcompany:{filmcompany}</p>
        <p>year_of_relize:{year_of_relize}</p>
      </>
    );
  }
}