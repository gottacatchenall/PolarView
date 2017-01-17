
// Export Constants
export const ADD_ACTIVE_DATA = 'ADD_ACTIVE_DATA';

export function addActiveData(data) {
  return {
    type: ADD_ACTIVE_DATA,
    data
  };
}
