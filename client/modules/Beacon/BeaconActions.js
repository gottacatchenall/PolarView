import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_BEACON_DEFINITION = 'ADD_BEACON_DEFINITION';
export const TOGGLE_ACTIVE_ITEM = 'TOGGLE_ACTIVE_ITEM';
export const ADD_ACTIVE_DATA = 'ADD_ACTIVE_DATA';


// Export Actions
export function addBeaconDefinition(data) {
    return {
        type: ADD_BEACON_DEFINITION,
        data
    };
}

export function addActiveData(data, id) {
    return {
        type: ADD_ACTIVE_DATA,
        data,
        id
    };
}

export function fetchActiveData(id, name) {
    var apiUrl = 'data/' + name;
    return (dispatch) => {
        return callApi(apiUrl).then(res => {
            dispatch(addActiveData(res, id));
        });
    }
}

export function toggleActiveItem(id) {
    return {
        type: TOGGLE_ACTIVE_ITEM,
        id
    }
};

export function fetchBeaconDefinition() {
  return (dispatch) => {
        return callApi('beaconDefinition').then(res => {
            // parse the post into useful information here stuff here
            var definition = [];
            for (var x in res){
                var currentDef = {
                      name: res[x].name,
                      active: false,
                      key: res[x]._id,
                      units: res[x].units,
                      desc: res[x].description
                };
                definition.push(currentDef);
            }
            dispatch(addBeaconDefinition(definition));
        });
  };
}
