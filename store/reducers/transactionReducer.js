import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../actions/types'
import { getDatabase, ref, onChildAdded } from '../../src/DataBase/DataBase'

const initialState = {
  transactions: [
    { addedtime: 1576590342000, id: 2, title: 'Amala Soup', price: -40 },
  ],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      }
    default:
      return state
  }
}
