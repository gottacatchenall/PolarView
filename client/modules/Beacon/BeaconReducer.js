// Import Actions
import { ADD_BEACON_DEFINITION, TOGGLE_ACTIVE_ITEM, ADD_ACTIVE_DATA } from './BeaconActions';
import { fetchActiveData }  from './BeaconActions';
import callApi from '../../util/apiCaller';

// Initial state
const initialState = { definition: [], active: [] };

// Reducer for individual objects
const BeaconItemReducer = (state = {}, action) => {
  switch(action.type){
    case TOGGLE_ACTIVE_ITEM:
        if (state.key != action.id) {
            return state;
        }
        return Object.assign({}, state, {
            active: !state.active,
        });
    case ADD_ACTIVE_DATA:
        if(state.key != action.id){
            return state;
        }
        // format the data
        var formattedData = [];
        for (var i in action.data){
            formattedData.push(
                {
                x: action.data[i].SYS_0_EPOCH,
                y: action.data[i][state.name]
            }
        );
        }
        return Object.assign({}, state, {
            data: formattedData,
        });
    default:
      return state;
  }
};

const BeaconReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEACON_DEFINITION:
        return {
            definition: action.data,
        };
    case ADD_ACTIVE_DATA:
        var active = [];
        if(active){
            active = state.active.map(item =>
                BeaconItemReducer(item, action)
            );
        }
        return{
            active:active,
            definition:state.definition
        }
    case TOGGLE_ACTIVE_ITEM:
        // the active item should also be put into an array of active data
        var def = state.definition.map(item =>
                    BeaconItemReducer(item, action)
        );
        var active = [];
        for (var i in def){
            if(def[i].active){
                // grab the data from server here?
               active.push(def[i]);
            }
        }
        return {
            definition: def,
            active: active
        };
    default:
        return state;
  }
};

export const getBeaconDefinition = state => state.beacon.definition;

export default BeaconReducer;
