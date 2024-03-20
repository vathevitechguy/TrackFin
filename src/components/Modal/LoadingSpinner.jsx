import React from 'react';

const LoadingSpinner = (props) => {
  return (
    <div className="flex justify-center items-center h-full" style={props.cS}>
      <div className="border-4 border-black border-opacity-30 border-solid rounded-full w-10 h-10 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
