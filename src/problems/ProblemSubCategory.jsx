import React from 'react';

import styled from '@emotion/styled';

import Button from './Button';

const SubCategoryContainer = styled.div({
  width: '65%',
  margin: '5vh 0',
  display: 'flex',
  justifyContent: 'center',
});

export default function ProblemSubCategory({ subCategories, onClick }) {
  return (
    <SubCategoryContainer>
      {(subCategories)
        ? (
          subCategories.map((subCategory) => (
            <Button
              key={subCategory}
              name={subCategory}
              type="button"
              onClick={onClick}
            >
              {subCategory}
            </Button>
          ))
        ) : null}

    </SubCategoryContainer>
  );
}
