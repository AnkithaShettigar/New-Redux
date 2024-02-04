import { BUY_ICECREAM } from './iceCreamType';

const initialState = {
  numberOfIceCream: 20,
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceReducer;
