import {expect} from 'chai';
import removeNestedDataNode from './removeNestedDataNode';

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

describe('Remove Nested Data Node', () => {
  describe('removeNestedDataNode', () => {
    it('deletes correct first level node', () => {
      // assert
      const expected = [
        {
          "data": {
            "Identification number": "31",
          },
          "kids": {}
        }
      ];
      expect(removeNestedDataNode(nodes, "Identification number", "30")).to.deep.equal(expected);
    });

    it('deletes correct first level node', () => {
      const expected = [
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
        }
      ];
      // assert
      expect(removeNestedDataNode(nodes, "Identification number", "31")).to.deep.equal(expected);
    });

    it('deletes correct second level node', () => {
      const expected = [
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
      ];
      // assert
      expect(removeNestedDataNode(nodes, "Subidentification number", "60")).to.deep.equal(expected);
    });

    it('returns original when not found', () => {
      expect(removeNestedDataNode(nodes, "Identification number", "32")).to.deep.equal(nodes);
    });
  });
});
