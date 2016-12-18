import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import TableRow from './TableRow';

chai.use(sinonChai);

describe('<TableRow />', () => {
  it('should be a table row', () => {
    const props = {
      values: [],
      hasKids: false
    };

    const wrapper = shallow(<TableRow {...props} />);

    const actual = wrapper.type();
    const expected = 'tr';

    expect(actual).to.equal(expected);
  });

  it('should contain all columns', () => {
    const props = {
      values: ['val1', 'val2'],
      hasKids: false
    };

    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper.find('td')).to.have.length(3);
    expect(wrapper.find('td').at(1).text()).to.equal('val1');
    expect(wrapper.find('td').at(2).text()).to.equal('val2');
  });

  it('should display arrow when kids present', () => {
    const props = {
      values: ['val1', 'val2'],
      hasKids: true
    };

    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper.find('td')).to.have.length(3);
    expect(wrapper.find('td').at(0).text()).to.equal('▼');
  });

});
