import {
  combineReducers,
  createStore,
} from 'redux';

// Deep Clone
const deepClone = data => JSON.parse(JSON.stringify(data));

// Constants
const ADD_OPERATION_NUMBER      = 'ADD_OPERATION_NUMBER'
const ADD_OPERATION_ARITHMETIC  = 'ADD_OPERATION_ARITHMETIC'
const CLEAR_OPERATION           = 'CLEAR_OPERATION'
const SIGN_OPERATION            = 'SIGN_OPERATION'
const SQUARE_OPERATION          = 'SQUARE_OPERATION'
const ROOT_OPERATION            = 'ROOT_OPERATION'
const GET_OPERATION_RESULT      = 'GET_OPERATION_RESULT'

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

export const getOperationResult = operationResult => ({
  type: GET_OPERATION_RESULT,
  operationResult
});

export const signOperation = operation => ({
  type: SIGN_OPERATION,
  operation
});

export const squareOperation = operation => ({
  type: SQUARE_OPERATION,
  operation
});

export const rootOperation = operation => ({
  type: ROOT_OPERATION,
  operation
});

// Reducers
export const currentData = (state = [], action) => {
  let clonedState = deepClone(state);
  switch (action.type) {
    case ADD_OPERATION_NUMBER:
      if (isNaN(state[state.length - 1])) {
        clonedState.push(action.operationNumber.char)
      } else {
        clonedState[clonedState.length - 1] += action.operationNumber.char;
      }
      return state = clonedState;
    case ADD_OPERATION_ARITHMETIC:
      if (isNaN(state[state.length - 1])) {
        clonedState[clonedState.length - 1] = action.operationArithmetic.char;
      } else {
        if (clonedState.length >= 3){
          // eslint-disable-next-line
          clonedState = [eval(clonedState.join("")).toString()];
        }
        clonedState.push(action.operationArithmetic.char);
      }
      return state = clonedState;
    case GET_OPERATION_RESULT:
      if (clonedState.length >= 3){
        // eslint-disable-next-line
        clonedState = [eval(clonedState.join("")).toString()];
      }
      if (isNaN(state[state.length - 1])) {
        clonedState = [ clonedState[clonedState.length - 2] ];
      } else {
        clonedState = [ clonedState[clonedState.length - 1] ];
      }
      return state = clonedState;
    case CLEAR_OPERATION:
      return state = [];
    case SIGN_OPERATION:
      return state;
    case SQUARE_OPERATION:
      return state;
    case ROOT_OPERATION:
      return state;
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
