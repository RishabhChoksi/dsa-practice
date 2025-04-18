import React from 'react'
import Card from '../../shared/Card';
import Constraints from './Constraints';
import Example from './Example';
import styled from 'styled-components';
import { ProblemState } from '../Problem';

const StyledQuestion = styled('section')`
padding: 1rem;
background-color: #262626;
color: #e1e1e1;
`
const StyledHeadingWrapper = styled('div')`
  margin-top: 0.3rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const StyledHeading = styled('h3')`
  font-size: 1.5rem;
  margin: 0;
`

const StyledDifficulty = styled('h3') <{ difficultyLevel: string }>`
  font-weight: 600;
  margin-top: 0rem;
  color: ${p => p.difficultyLevel === "Hard" ? "#ff0000" : p.difficultyLevel === "Medium" ? "#FFA500" : "#00ad5f"};
  `

const StyledSource = styled('a')`
font-size: 0.8rem;

&:link,&:visited {
  color: gray;
}

&:hover {
  color: white;
}

`

export interface ExampleState {
  id: number;
  input: string;
  output: string;
  explanation: string;
  headingImages?: string[];
}

export interface QuestionState {
  heading: string;
  question: string;
  headingImages?: string[];
  examples: Array<ExampleState>;
  constraints?: string[];
  hints?: string[];
}



const Question = ({ heading, question, headingImages, examples, constraints, difficultyLevel, url, source }: QuestionState & ProblemState) => {
  return (
    <Card title="Description" titleBgColor="#2f3136">
      <StyledQuestion>
        <StyledHeadingWrapper>
          <StyledHeading>{heading}</StyledHeading>
          <StyledSource href={url} target='_blank'>{source}</StyledSource>
        </StyledHeadingWrapper>

        <StyledDifficulty difficultyLevel={difficultyLevel}>{difficultyLevel}</StyledDifficulty>
        <div>{question}</div>
        {headingImages && <img src={headingImages[0]} alt=''/>}
        {examples.map((example) => <Example key={example.id} {...example} />)}
        {constraints && <Constraints  {...constraints} />}
      </StyledQuestion>
    </Card>
  )
}

export default Question