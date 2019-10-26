import {
  combineReducers,
  createStore,
} from 'redux';

// Constants
const UPDATE_OPERATION = 'UPDATE_OPERATION'

// Actions
export const updateOperation = operation => ({
  type: UPDATE_OPERATION,
  operation
});

// Reducers
export const operation = (state = [], action) => {
  switch (action.type) {
    case UPDATE_OPERATION:
      return action.operation
    default:
      return state;
  }
};

export const reducers = combineReducers({
  operation
});

// Store
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
