import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadProblems } from '../redux/actions';

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
  const dispatch = useDispatch();

  const problems = useSelector((state) => state.problems);
  const difficulty = useSelector((state) => state.problemDifficulty);
  const category = useSelector((state) => state.selectedSubCategory);

  const filterProblems = (problem) => (difficulty === '' && category === '') || (
    problem.difficulty === difficulty && category === '') || (difficulty === '' && problem.category === category) || (problem.difficulty === difficulty && problem.category === category);

  const selectedProblems = problems.filter((problem) => filterProblems(problem));

  useEffect(() => {
    dispatch(loadProblems());
  }, []);

  return (
    <div>
      {(problems.length)
        ? (
          selectedProblems
            .map((problem) => (
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
