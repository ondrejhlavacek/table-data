import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import TableRow from './TableRow';
import sinon from 'sinon';


describe('<TableRow />', () => {
  it('should be a table row', () => {
    const props = {
      values: [],
      hasKids: false,
      isExpanded: false,
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<TableRow {...props} />);

    const actual = wrapper.type();
    const expected = 'tr';

    expect(actual).to.equal(expected);
  });

  it('should contain all columns', () => {
    const props = {
      values: ['val1', 'val2'],
      hasKids: false,
      isExpanded: false,
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper.find('td')).to.have.length(4);
    expect(wrapper.find('td').at(1).text()).to.equal('val1');
    expect(wrapper.find('td').at(2).text()).to.equal('val2');
  });

  it('should display arrow when kids present', () => {
    const props = {
      values: [],
      hasKids: true,
      isExpanded: false,
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper.find('td')).to.have.length(2);
    expect(wrapper.find('td').at(0).text()).to.equal('▶');
  });

  it('should display arrow when kids present and is expanded', () => {
    const props = {
      values: [],
      hasKids: true,
      isExpanded: true,
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper.find('td')).to.have.length(2);
    expect(wrapper.find('td').at(0).text()).to.equal('▼');
  });

  it('should handle toggle', () => {
    const toggleFn = sinon.spy();
    const wrapper = shallow(<TableRow
      values={[]}
      hasKids={true}
      isExpanded={false}
      toggleNode={toggleFn}
      deleteNode={() => {}}
    />);

    expect(toggleFn.calledOnce).to.be.false;
    wrapper.find('span.expand').simulate('click');
    expect(toggleFn.calledOnce).to.be.true;
  });

  it('should display delete icon', () => {
    const props = {
      values: [],
      hasKids: true,
      isExpanded: true,
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper.find('td')).to.have.length(2);
    expect(wrapper.find('td').at(1).text()).to.equal('✗');
  });

  it('should handle delete', () => {
    const deleteFn = sinon.spy();
    const wrapper = shallow(<TableRow
      values={[]}
      hasKids={true}
      isExpanded={false}
      toggleNode={() => {}}
      deleteNode={deleteFn}
    />);

    expect(deleteFn.calledOnce).to.be.false;
    wrapper.find('span.delete').simulate('click');
    expect(deleteFn.calledOnce).to.be.true;
  });


});
