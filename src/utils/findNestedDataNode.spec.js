import {expect} from 'chai';
import findNestedDataNode from './findNestedDataNode';

const nodes = [
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
];

describe('Find Nested Data Node', () => {
  describe('findNestedDataNode', () => {
    it('returns correct first level node', () => {
      // assert
      expect(findNestedDataNode(nodes, "Identification number", "30")).to.deep.equal(nodes[0]);
    });

    it('returns correct first level node', () => {
      // assert
      expect(findNestedDataNode(nodes, "Identification number", "31")).to.deep.equal(nodes[1]);
    });

    it('returns correct second level node', () => {
      // assert
      expect(findNestedDataNode(nodes, "Subidentification number", "60")).to.deep.equal(nodes[0].kids.kid_group.records[0]);
    });

    it('returns false when not found', () => {
      expect(findNestedDataNode(nodes, "Identification number", "32")).to.equal(false);
    });
  });
});
