import * as types from '../constants/tableDataActionTypes';

export function toggleNode(identifierKey, identifierValue) {
  return {type: types.TOGGLE_NODE, identifierKey: identifierKey, identifierValue: identifierValue};
}
