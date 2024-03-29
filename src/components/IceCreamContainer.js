import React from 'react';
import { buyIce } from '../redux';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfIceCream}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
