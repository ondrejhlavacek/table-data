import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import TableHeaderRow from './TableHeaderRow';

chai.use(sinonChai);

describe('<TableHeaderRow />', () => {
  it('should be a table row', () => {
    const props = {
      columns: [],
    };

    const wrapper = shallow(<TableHeaderRow {...props} />);

    const actual = wrapper.type();
    const expected = 'tr';

    expect(actual).to.equal(expected);
  });
  it('should contain all columns', () => {
    const props = {
      columns: ['col1', 'col2'],
    };

    const wrapper = shallow(<TableHeaderRow {...props} />);

    expect(wrapper.find('th')).to.have.length(4);
    expect(wrapper.find('th').at(1).text()).to.equal('col1');
    expect(wrapper.find('th').at(2).text()).to.equal('col2');
  });

});
