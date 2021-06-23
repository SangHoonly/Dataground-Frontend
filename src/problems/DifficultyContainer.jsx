import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { setProblemDifficulty } from '../redux/actions';

import Button from './Button';

const DifficultyContainerDiv = styled.div({
  margin: '0 0 0 10vw',
});

export default function DifficultyContainer() {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.problemDifficulty);

  function handleClick(event) {
    if (event.target.innerText === event.target.name) {
      dispatch(setProblemDifficulty(parseInt(event.target.value, 10)));
      return;
    }
    dispatch(setProblemDifficulty(''));
  }
  return (
    <DifficultyContainerDiv>
      <Button type="button" name="연습중!" value="0" onClick={handleClick}>
        {difficulty === 0 ? '연습중! (V)' : '연습중!'}
      </Button>
      <Button type="button" name="도전!!" value="1" onClick={handleClick}>
        {difficulty === 1 ? '도전!! (V)' : '도전!!'}
      </Button>
    </DifficultyContainerDiv>
  );
}
