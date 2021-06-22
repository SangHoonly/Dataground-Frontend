import React from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadProblems, setProblemDifficulty } from '../redux/actions';

import Button from './Button';

const DifficultyContainerDiv = styled.div({
  margin: '0 0 0 10vw',
});

export default function DifficultyContainer() {
  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(setProblemDifficulty(event.target.name));
    dispatch(loadProblems());
  }
  return (
    <DifficultyContainerDiv>
      <Button type="button" name="연습중!" onClick={handleClick}>연습중!</Button>
      <Button type="button" name="도전!!" onClick={handleClick}>도전!!</Button>
    </DifficultyContainerDiv>
  );
}
