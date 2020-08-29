import React from 'react';
import './Quote.css';
import {NavLink} from "react-router-dom";

const Quote = props => (
    <>
        <div className="quote">
            <div className="category">Category: {props.category}</div>
            <div className="author">Author: {props.author}</div>
            <div className="text">{props.text}</div>
            <NavLink exact to={`/quote/${props.id}/edit`} className="more left">Edit or Delete</NavLink>
        </div>
    </>
);

export default Quote;