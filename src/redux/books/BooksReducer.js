const { BUY_BOOK } = require('./BooksType');

const initialState = {
  numberOfBooks: 50,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        numberOfBooks: state.numberOfBooks - 1,
      };
    default:
      return state;
  }
};

export default bookReducer;
