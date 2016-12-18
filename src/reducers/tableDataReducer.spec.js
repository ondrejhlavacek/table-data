import { expect } from 'chai';
// import * as ActionTypes from '../constants/actionTypes';
import reducer from './tableDataReducer';

describe('Reducers::TableData', () => {
  const getInitialState = () => {
    return {
      entities: []
    };
  };

  /*
  const getAppState = () => {
    return {
      entities: []
    };
  };
  */

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(getInitialState(), action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });
});
