// Import Actions
import {  } from './DataActions';

// Initial State
const initialState = {};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getActiveData = state => state.beacon.active;

export default DataReducer;
