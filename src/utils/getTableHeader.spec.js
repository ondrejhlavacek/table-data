import {expect} from 'chai';
import getTableHeader from './getTableHeader';

describe('Get Table Header', () => {
  describe('getTableHeader', () => {
    it('returns attribute keys of the first element of the array', () => {
      const date = [
        {
          data: {
            Key1: 'val1',
            Key2: 'val1'
          }
        }
      ];

      // assert
      expect(getTableHeader(date)).to.deep.equal(['Key1', 'Key2']);
    });
  });
});
