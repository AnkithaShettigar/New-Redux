import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIce } from '../redux';

const ItemContainer = (props) => {
  return (
    <div>
      <h1>Item - {props.item}</h1>
      <button onClick={props.dispatchItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemstate = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCream;

  return {
    item: itemstate,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIce());
  return {
    dispatchItem: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

/* If you doesnot wnats to update the state only dispatch the action */
// export default connect(null, mapDispatchToProps)(ItemContainer);
