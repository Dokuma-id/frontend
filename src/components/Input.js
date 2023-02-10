import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Input = ({placeholder, type, value, change}) => {
    return (

        <Row size={12} sm={6} className="px-1">
            <input type={type} value={value} placeholder={placeholder} onChange={change} />
        </Row>
    )
}


export default Input

