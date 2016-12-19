import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {TableDataPage} from './TableDataPage';
import TableData from '../components/TableDataContainer';

describe('<TableDataPage />', () => {
  it('should contain <TableData />', () => {
    const actions = {
      toggleNode: () => {}
    };
    const data = {};
    const wrapper = shallow(<TableDataPage actions={actions} data={data}/>);

    expect(wrapper.find(TableData)).to.be.length(1);
  });
});
