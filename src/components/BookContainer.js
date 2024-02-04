import React from 'react';
import { buyBook } from '../redux';
import { connect } from 'react-redux';

const BookContainer = (props) => {
  return (
    <div>
      <h1>Number of books - {props.numberOfBooks}</h1>
      <button onClick={props.dispatch}>Buy book</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfBooks: state.book.numberOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => dispatch(buyBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
