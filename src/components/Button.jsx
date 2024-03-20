import React from 'react';

const Button = (props) => {
  const styles = props.styles;
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-[10px] text-[18px] text-primary outline-none ${styles}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
