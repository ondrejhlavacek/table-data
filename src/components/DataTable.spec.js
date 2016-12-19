import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import DataTable from './DataTable';

chai.use(sinonChai);

describe('<DataTable />', () => {
  it('should be a span', () => {
    const props = {
      entities: [],
      title: '',
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<DataTable {...props} />);

    const actual = wrapper.type();
    const expected = 'span';

    expect(actual).to.equal(expected);
  });

  it('should contain title', () => {
    const props = {
      entities: [],
      title: 'MyTitle',
      toggleNode: () => {},
      deleteNode: () => {}
    };

    const wrapper = shallow(<DataTable {...props} />);

    expect(wrapper.find('h4').at(0).text()).to.equal('MyTitle');
  });
});
