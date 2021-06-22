import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import ProblemSubCategory from './ProblemSubCategory';

import Button from './Button';

import {
  loadProblems,
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
      '지도 학습': ['분류', '회귀'],
      '비지도 학습': ['군집', '차원 축소', '연관 규칙 학습'],
      '강화 학습': ['강화 학습'],
    };
    const subCategories = categories[event.target.name];
    dispatch(setSelectedSubCategories(subCategories));
  }
  function handleSubClick(event) {
    dispatch(setSelectedSubCategory(event.target.name));
    dispatch(loadProblems());
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
