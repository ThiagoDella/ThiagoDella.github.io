import React from 'react';

function Skeleton(props) {
  return (
    <div className="Skeleton">
      <div className="skeleton__row--first"></div>
      <div className="skeleton__row--second"></div>
      <div className="skeleton__row--third"></div>
      <div className="skeleton__row--fourth"></div>
    </div>
  );
}

export default Skeleton;