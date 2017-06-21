import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { sinon } from 'sinon';

import IconButton from '../template/iconButton';

describe('<IconButton />' , () => {

  describe('Test component if selectable by class', () => {
    it('should be selectable by class "icon-button"', () => {
      const wrapper = shallow(<IconButton />);
      expect(wrapper.is('.icon-button')).to.be.eql(true);
    });
  })
 

  describe('Test the style property', () => {
    it('Should return the string value of the style property' , () => {
      const wrapper = mount(<IconButton style='test'/>);
      expect(wrapper.props().style).to.be.eql('test');

      wrapper.setProps({style: 'other'});
      expect(wrapper.props().style).to.be.eql('other');
    });
  })

  describe('Test the icon property', () => {
    it('Should return the string value of the icon property', () => {
      const wrapper = mount(<IconButton icon='test' />);
      expect(wrapper.props().icon).to.be.eql('test');

      wrapper.setProps({icon: 'other'});
      expect(wrapper.props().icon).to.be.eql('other');
    })
  })
 
});