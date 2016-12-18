import * as types from '../constants/tableDataActionTypes';

export function dummyAction(settings) {
  return {type: types.DUMMY, settings};
}
