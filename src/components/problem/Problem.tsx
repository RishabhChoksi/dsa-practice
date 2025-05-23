import React from 'react'
import Question from './question/Question'
import Solution from './solution/Solution'
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/store';
import { IndividualProblemState } from '../../store/app-slice';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledProblem = styled('div')`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 0.4rem 0.5rem; 
    background-color: rgb(52, 51, 51);
    font-family: poppins;

`

export interface ProblemState {
    id: number;
    topic: string;
    source: string;
    url: string;
    tags: string[];
    difficultyLevel: "Hard" | "Medium" | "Easy";
}

const Problem = () => {
  const { id } = useParams<{ id: string }>(); 
  let problemId = parseInt(id || "0", 10);
  const {question,problem,solution}:IndividualProblemState = useSelector((state:RootStateType) => state.app[problemId]);
  return (
    <StyledProblem>
        <Question {...question} {...problem}/>
        <Solution {...solution}/>
    </StyledProblem>
  )
}

export default Problem