import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import given from 'given2';

import ProblemListContainer from './ProblemListContainer';

jest.mock('react-redux');

describe('ProblemListContainer', () => {
  const handleClick = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      problems: given.problems,
    }));
  });

  it('화면에 문제들이 보입니다.', () => {
    given('problems', () => [{ id: 1, title: '수능 성적 예측하기' }]);
    useDispatch.mockImplementation(() => dispatch);

    const { queryByText } = render((<ProblemListContainer onClick={handleClick} />));

    expect(queryByText(/수능 성적 예측하기/)).not.toBeNull();
  });
});
