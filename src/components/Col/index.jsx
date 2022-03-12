import React from 'react';

function index({children, ...props}) {
  return (
    <div className="col">
      {children}
    </div>
  );
}

export default index;