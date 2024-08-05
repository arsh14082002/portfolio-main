import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-[70px] p-4 rounded-lg text-gray-800">{error}</div>
    </div>
  );
};

export default Error;
