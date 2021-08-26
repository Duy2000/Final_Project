import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types";

const initialState = {
  transactions: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
