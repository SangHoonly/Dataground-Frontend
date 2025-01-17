import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import context from 'jest-plugin-context';

import ProblemSubCategory from './ProblemSubCategory';

jest.mock('react-redux');

describe('ProblemSubCategory', () => {
  context('subCategories가 있으면', () => {
    it('subCategory 버튼이 보입니다.', () => {
      useSelector.mockImplementation((selector) => selector({
        selectedSubCategory: '',
      }));

      const filledSubCategories = ['classification', 'regression'];

      const { queryByText } = render((
        <ProblemSubCategory subCategories={filledSubCategories} />
      ));

      expect(queryByText('분류')).not.toBeNull();
      expect(queryByText('회귀')).not.toBeNull();
    });
  });

  context('subCategories가 없으면', () => {
    it('아무 버튼도 보이지 않습니다.', () => {
      useSelector.mockImplementation((selector) => selector({
        selectedSubCategory: '',
      }));
      const emptySubCategories = [];

      const { container } = render((
        <ProblemSubCategory subCategories={emptySubCategories} />
      ));

      expect(container).not.toHaveTextContent();
    });
  });
});
