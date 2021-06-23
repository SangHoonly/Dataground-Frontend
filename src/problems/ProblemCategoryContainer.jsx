import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import ProblemSubCategory from './ProblemSubCategory';

import Button from './Button';

import {
  setSelectedSubCategories,
  setSelectedSubCategory,
} from '../redux/actions';

const CategoryContainerDiv = styled.div({
  margin: '0 10vw 0 0',
});

export default function ProblemCategoryContainer() {
  const dispatch = useDispatch();

  function handleClick(event) {
    const categories = {
      '지도 학습': ['classification', 'regression'],
      '비지도 학습': ['clustering', 'dimensionReduction', 'associationRule'],
      '강화 학습': ['reinforcement'],
    };
    const subCategories = categories[event.target.name];
    dispatch(setSelectedSubCategories(subCategories));
  }
  function handleSubClick(event) {
    if (event.target.innerText === event.target.name) {
      dispatch(setSelectedSubCategory(event.target.value));
      return;
    }
    dispatch(setSelectedSubCategory(''));
  }

  const subCategories = useSelector((state) => state.selectedSubCategories);
  return (
    <div>
      <CategoryContainerDiv>
        <Button type="button" name="지도 학습" onClick={handleClick}>지도 학습</Button>
        <Button type="button" name="비지도 학습" onClick={handleClick}>비지도 학습</Button>
        <Button type="button" name="강화 학습" onClick={handleClick}>강화 학습</Button>
      </CategoryContainerDiv>
      <ProblemSubCategory subCategories={subCategories} onClick={handleSubClick} />
    </div>
  );
}
