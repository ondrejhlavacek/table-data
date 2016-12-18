import {expect} from 'chai';
import getRowValues from './getRowValues';

describe('Get Table Header', () => {
  describe('getTableHeader', () => {
    it('returns attribute keys of the first element of the array', () => {
      const values ={
        Key1: 'val1',
        Key2: 'val2'
      };
      // assert
      expect(getRowValues(values)).to.deep.equal(['val1', 'val2']);
    });
  });
});
