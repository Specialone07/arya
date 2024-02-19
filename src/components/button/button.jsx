// import React from 'react'

const Button = (props) => {
  const { onClick, disabled, text, className, icon, type } = props;
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
