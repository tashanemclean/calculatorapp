import React from "react";

const Button = props => {
  return (
    <div
      className={`
        btn-wrapper
        ${isNaN(props.children) ? "operator" : null}
        ${props.label}
        `}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
