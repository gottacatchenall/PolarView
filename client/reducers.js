/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import data from './modules/Data/DataReducer';
import beacon from './modules/Beacon/BeaconReducer';
// Combine all reducers into one root reducer
export default combineReducers({
  app,
  beacon,
  data
});
