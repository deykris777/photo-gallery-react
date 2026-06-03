import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Spinner;
