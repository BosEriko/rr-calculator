import {
  combineReducers,
  createStore,
} from 'redux';

// Constants
const ADD_OPERATION_NUMBER      = 'ADD_OPERATION_NUMBER'
const ADD_OPERATION_ARITHMETIC  = 'ADD_OPERATION_ARITHMETIC'
const CLEAR_OPERATION           = 'CLEAR_OPERATION'

// Actions
export const addOperationNumber = operationNumber => ({
  type: ADD_OPERATION_NUMBER,
  operationNumber
});

export const addOperationArithmetic = operationArithmetic => ({
  type: ADD_OPERATION_ARITHMETIC,
  operationArithmetic
});

export const clearOperation = operation => ({
  type: CLEAR_OPERATION,
  operation
});

// Reducers
export const currentData = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_NUMBER:
      if (isNaN(state[state.length - 1])) {
        state.push(action.operationNumber.char);
        return state;
      } else {
        state[state.length - 1] += action.operationNumber.char;
        return state;
      }
    case ADD_OPERATION_ARITHMETIC:
      if (isNaN(state[state.length - 1])) {
        state[state.length - 1] = action.operationArithmetic.char;
        return state;
      } else {
        state.push(action.operationArithmetic.char);
        return state;
      }
    case CLEAR_OPERATION:
      return state = [];
    default:
      return state;
  }
};

export const reducers = combineReducers({
  currentData
});

// Store
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
