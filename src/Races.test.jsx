import { shallow } from 'enzyme';
import * as React from 'react';
import Races from './Races';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Races SnapShot', () => {

  it('should match snapshot', () => {
      const wrapper = shallow(<Races />);
      expect(wrapper.find('div')).toMatchSnapshot();
  });

});
