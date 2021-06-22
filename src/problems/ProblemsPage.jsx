import React from 'react';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import DifficultyContainer from './DifficultyContainer';
import ProblemCategoryContainer from './ProblemCategoryContainer';
import ProblemListContainer from './ProblemListContainer';

const Container = styled.div({
  padding: '0 10vw',
});

const SelectContainer = styled.div({
  margin: '10vh 0 5vh 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: 'solid 1px #e5e5e5',
});

const ProblemsTitle = styled.div({
  margin: '3vh 0',
  fontSize: '5vh',
  display: 'flex',
  justifyContent: 'center',
});

export default function ProblemsPage() {
  const history = useHistory();

  function handleProblemClick(problemId) {
    const url = `/problems/${problemId}`;
    history.push(url);
  }

  return (
    <Container>
      <ProblemsTitle>
        Problems
      </ProblemsTitle>
      <SelectContainer>
        <DifficultyContainer />
        <ProblemCategoryContainer />
      </SelectContainer>
      <ProblemListContainer onClick={handleProblemClick} />
    </Container>
  );
}
