import {TOGGLE_NODE, REMOVE_NODE} from '../constants/tableDataActionTypes';
import initialState from './tableDataInitialState';
import objectAssign from 'object-assign';
import findNestedDataNode from '../utils/findNestedDataNode';
import removeNestedDataNode from '../utils/removeNestedDataNode';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function tableDataReducer(state = initialState.tableData, action) {
  let newState;

  switch (action.type) {

    case TOGGLE_NODE: {
      newState = objectAssign({}, state);
      let element = findNestedDataNode(newState.entities, action.identifierKey, action.identifierValue);
      if (element !== false) {
        element.expanded = !element.expanded;
      }
      return newState;
    }

    case REMOVE_NODE: {
      newState = objectAssign({}, state);
      newState.entities = removeNestedDataNode(newState.entities, action.identifierKey, action.identifierValue);
      console.log(newState);
      return newState;
    }

    default: {
      return state;
    }
  }
}
