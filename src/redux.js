import {
  combineReducers,
  createStore,
} from 'redux';

// Constants
const UPDATE_CURRENT_DATA = 'UPDATE_CURRENT_DATA'

// Actions
export const updateCurrentData = currentData => ({
  type: UPDATE_CURRENT_DATA,
  currentData
});

// Reducers
export const currentData = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_DATA:
      return action.currentData
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
