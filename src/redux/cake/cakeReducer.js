const { BUY_CAKE } = require('./cakeType');

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numberOfCakes: state.numberOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
