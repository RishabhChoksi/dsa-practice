import React from 'react'
import { RootStateType } from '../../store/store';
import { useSelector } from 'react-redux';
import { IndividualProblemState } from '../../store/app-slice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledProblemsList = styled('section')`
  margin:0;
  
`;

const ProblemsList = () => {
  const problemsList: IndividualProblemState[] = useSelector((state:RootStateType) => state.app);
  return (
    <StyledProblemsList>
       <h2>Problems List</h2>
      <ul>
        {problemsList.map(({problem,question}: IndividualProblemState) => (
          <li key={problem.id}>
            <Link to={`problems/${problem.id}`}>{question.heading}</Link>
          </li>
        ))}
      </ul>
      </StyledProblemsList>
  )
}

export default ProblemsList