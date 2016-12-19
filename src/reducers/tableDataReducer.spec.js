import { expect } from 'chai';
import * as ActionTypes from '../constants/tableDataActionTypes';
import reducer from './tableDataReducer';

describe('Reducers::TableData', () => {
  const getInitialState = () => {
    return {
      entities: []
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();
    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });

  it('should handle TOGGLE_NODE', () => {
    const appState = {
      entities: [
        {
          "data": {
            "Identification number": "30",
          },
          "kids": {}
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    const action = {
      type: ActionTypes.TOGGLE_NODE,
      identifierKey: 'Identification number',
      identifierValue: '30'
    };

    const expectedAppState = {
      entities: [
        {
          "expanded": true,
          "data": {
            "Identification number": "30",
          },
          "kids": {}
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    expect(reducer(appState, action)).to.deep.equal(expectedAppState);
  });


  it('should handle nested TOGGLE_NODE', () => {
    const appState = {
      entities: [
        {
          "data": {
            "Identification number": "30",
          },
          "kids": {
            "kid_group": {
              "records": [
                {
                  "data": {
                    "Subidentification number": "60"
                  },
                  "kids": {}
                }
              ]
            }
          }
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    const action = {
      type: ActionTypes.TOGGLE_NODE,
      identifierKey: 'Subidentification number',
      identifierValue: '60'
    };

    const expectedAppState = {
      entities: [
        {
          "data": {
            "Identification number": "30",
          },
          "kids": {
            "kid_group": {
              "records": [
                {
                  "expanded": true,
                  "data": {
                    "Subidentification number": "60"
                  },
                  "kids": {}
                }
              ]
            }
          }
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    expect(reducer(appState, action)).to.deep.equal(expectedAppState);
  });


  it('should handle TOGGLE_NODE', () => {
    const appState = {
      entities: [
        {
          "expanded": true,
          "data": {
            "Identification number": "30",
          },
          "kids": {}
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    const action = {
      type: ActionTypes.TOGGLE_NODE,
      identifierKey: 'Identification number',
      identifierValue: '30'
    };

    const expectedAppState = {
      entities: [
        {
          "expanded": false,
          "data": {
            "Identification number": "30",
          },
          "kids": {}
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    expect(reducer(appState, action)).to.deep.equal(expectedAppState);
  });


  it('should handle nested TOGGLE_NODE', () => {
    const appState = {
      entities: [
        {
          "data": {
            "Identification number": "30",
          },
          "kids": {
            "kid_group": {
              "records": [
                {
                  "expanded": true,
                  "data": {
                    "Subidentification number": "60"
                  },
                  "kids": {}
                }
              ]
            }
          }
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    const action = {
      type: ActionTypes.TOGGLE_NODE,
      identifierKey: 'Subidentification number',
      identifierValue: '60'
    };

    const expectedAppState = {
      entities: [
        {
          "data": {
            "Identification number": "30",
          },
          "kids": {
            "kid_group": {
              "records": [
                {
                  "expanded": false,
                  "data": {
                    "Subidentification number": "60"
                  },
                  "kids": {}
                }
              ]
            }
          }
        },
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ]
    };

    expect(reducer(appState, action)).to.deep.equal(expectedAppState);
  });


});
