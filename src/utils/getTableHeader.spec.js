import {expect} from 'chai';
import getTableHeader from './getTableHeader';

describe('Get Table Header', () => {
  describe('getTableHeader', () => {
    it('returns empty array when data empty', () => {
      const data = [];

      // assert
      expect(getTableHeader(data)).to.deep.equal([]);
    });
    it('returns attribute keys of the first element of the array', () => {
      const data = [
        {
          data: {
            Key1: 'val1',
            Key2: 'val1'
          }
        }
      ];

      // assert
      expect(getTableHeader(data)).to.deep.equal(['Key1', 'Key2']);
    });
  });
});
