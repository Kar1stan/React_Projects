import React from "react";
import { CardGroup } from "react-bootstrap";
import Street from "./Street";

const StreetList = (props) => {
    return (
        <CardGroup>
            {props.data.map(item => (
                <Street key={item.id} {...item}></Street>
            ))}
        </CardGroup>
    )
}

export default StreetList

