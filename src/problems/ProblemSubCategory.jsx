import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Button from './Button';

const SubCategoryContainer = styled.div({
  width: '65%',
  margin: '5vh 0',
  display: 'flex',
  justifyContent: 'center',
});

export default function ProblemSubCategory({ subCategories, onClick }) {
  const selectedSubCategory = useSelector((state) => state.selectedSubCategory);
  const category = {
    classification: '분류',
    regression: '회귀',
    clustering: '군집',
    dimensionReduction: '차원 축소',
    associationRule: '연관 규칙 학습',
    reinforcement: '강화 학습',
  };

  return (
    <SubCategoryContainer>
      {(subCategories)
        ? (
          subCategories.map((subCategory) => (
            <Button
              key={subCategory}
              name={category[subCategory]}
              value={subCategory}
              type="button"
              onClick={onClick}
            >
              {(subCategory === selectedSubCategory) ? `${category[subCategory]} (V)` : category[subCategory]}
            </Button>
          ))
        ) : null}

    </SubCategoryContainer>
  );
}
