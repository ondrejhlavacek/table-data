import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import TableRowKids from './TableRowKids';
import DataTable from './DataTable';

chai.use(sinonChai);

describe('<TableRowKids />', () => {
  it('should be a table row', () => {
    const props = {
      kids: {},
      colSpan: 0,
      toggleNode: () => {}
    };

    const wrapper = shallow(<TableRowKids {...props} />);

    const actual = wrapper.type();
    const expected = 'tr';

    expect(actual).to.equal(expected);
  });

  it('should set colSpan', () => {
    const props = {
      kids: {},
      colSpan: 10,
      toggleNode: () => {}
    };

    const wrapper = shallow(<TableRowKids {...props} />);
    expect(
      wrapper.find('tr').first().find('td').prop('colSpan')
    ).to.equal(props.colSpan);
  });

  it('should render new DataTable with correct props', () => {
    const records = [
      {
        'data': {
          'key1': 'val1'
        }
      }
    ];
    const props = {
      kids: {
        'kid_a': {
          'records': records
        }
      },
      colSpan: 1,
      toggleNode: () => {}
    };

    const wrapper = shallow(<TableRowKids {...props} />);
    const dataTableProps = wrapper.find('tr').first().find('td').first().find(DataTable).props();
    expect(dataTableProps.entities).to.deep.equal(records);
    expect(dataTableProps.title).to.equal('kid_a');
  })


});
