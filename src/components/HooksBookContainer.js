import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyBook } from '../redux';

const HooksBookContainer = () => {
  const bookCount = useSelector((state) => state.book.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of books - {bookCount}</h1>
      <button onClick={() => dispatch(buyBook())}>Buy book</button>
    </div>
  );
};

export default HooksBookContainer;
