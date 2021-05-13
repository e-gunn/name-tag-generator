// import the react library to write JSX
import React from "react";

// write an arrow function that returns JSX

const nameTag = (props) => (
  <div className="name-tag">
    <h3 className="title">HELLO</h3>
    <p className="subtitle">my name is</p>
    <h2 className="name">{props.name}</h2>
  </div>
);

// export functional component definition to be imported then rendered within another module
export default nameTag;