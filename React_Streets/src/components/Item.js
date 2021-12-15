import React from "react";
import { useParams } from "react-router";
import streets from "./../models/streets"
import Street from "./Street";



const Item = () => {
    const {id} = useParams()
    const street = streets.filter((val) => {
        // eslint-disable-next-line eqeqeq
        return val.id == id
    })[0];
    return (
        <Street key={street.id} {...street}></Street>
    )
}
export default Item;
