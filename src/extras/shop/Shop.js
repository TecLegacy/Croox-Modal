import React from 'react';
import Card from '../extras/UI/Card';
import Module from './shop.module.css';

const Shop = () => {
  return (
    <>
      <Card>
        <h3>Your shopping cart</h3>
        <div className={Module.item}>
          <div className='item-cart'>
            {/* Mango $18 ($6.00/item) */}
            <div>Mango</div>
            <div>$18 ($6.00/item)</div>
          </div>
          <div>x3 + -</div>
        </div>
      </Card>
    </>
  );
};

export default Shop;
