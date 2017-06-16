import React from 'react';
import { shallow } from 'enzyme';

import IconButton from '../template/iconButton';

describe('<IconButton />' , () => {

  it('should be selectable by class "icon-button"', () => {
    const wrapper = shallow(<IconButton />);

    expect(wrapper.is('.icon-button')).toBe(true);
  });
});