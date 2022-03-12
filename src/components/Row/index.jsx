import React from 'react';

function Row({children, ...props}) {
  return (
    <div className="row">
      {children}
    </div>
  );
}

export default Row;