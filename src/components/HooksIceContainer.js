import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIce } from '../redux';

function HooksIceContainer() {
  const count = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HooksIceContainer - {count}</h1>
      <button onClick={() => dispatch(buyIce())}>Buy Icc cream</button>
    </div>
  );
}

export default HooksIceContainer;
