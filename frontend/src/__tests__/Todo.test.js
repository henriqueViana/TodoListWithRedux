import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Todo from '../todo/todo';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

describe('<Todo />', () => {

  describe('child component PageHeader', () => {
    it('should have a child as a PageHeader', () => {
      const wrapper = shallow(<Todo />);
      expect(wrapper).to.contain(PageHeader);
    });
  });

});