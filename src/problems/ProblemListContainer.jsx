import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

const Button = styled.button({
  height: '20vh',
  width: '7vw',
  padding: '3vh 0 15vh 0',
  border: '1px solid #CCC',
  borderRadius: '2.5em',
  fontSize: '.4em',
  color: '#595959',
  backgroundColor: 'transparent',
  margin: '0 1vw',
  '&:hover': {
    backgroundColor: '#D6D6D6',
  },
  '&:active': {
    backgroundColor: '#BABABA',
  },
});

export default function ProblemListContainer({ onClick }) {
  const problems = useSelector((state) => state.problems);
  return (
    <div>
      {(problems.length)
        ? (
          problems.map((problem) => (
            <Button
              type="button"
              key={problem.id}
              name={problem.title}
              onClick={() => onClick(problem.id)}

            >
              {problem.title}
            </Button>
          ))
        )
        : null}
    </div>
  );
}
