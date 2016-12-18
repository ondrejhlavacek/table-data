// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import initialState from './tableDataInitialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function tableDataReducer(state = initialState.tableData, action) {
  let newState;

  switch (action.type) {
    default:
      return state;
  }
}
