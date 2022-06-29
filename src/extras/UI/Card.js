import React from 'react';
import Module from './card.module.css';
const Card = prop => {
  return (
    <React.Fragment>
      <div className={Module.card}>{prop.children}</div>
    </React.Fragment>
  );
};

export default Card;
