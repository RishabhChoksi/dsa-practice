import React from 'react'
import Card from '../../shared/Card';
import styled from 'styled-components';

const StyledSolution = styled('section')`
background-color: #202020;
color: #e1e1e1;
padding: 1rem;
white-space: pre-wrap;
font-family: monospace;
font-size: 1rem;
`



export interface SolutionState{
    solution: string;
}

const Solution = ({solution}:SolutionState) => {
  
  const updateContent = (content: string) => {
    return content.replace(
      /\b(Input|Output|Explanation|class|if|while|public|private|protected|return|static|void|int|boolean|new|this|for|else|true|false)\b|\d+|[><[\]{}()]|\/\*[\s\S]*?\*\/|\/\/.*/g,
      (match) => {
        if (/\/\*[\s\S]*?\*\//.test(match)) {
          // Multi-line comments in light gray
          return `<span style="color: #808080;">${match}</span>`;
        } else if (/^\/\/.*/.test(match)) {
          // Single-line comments in light gray
          return `<span style="color: #808080;">${match}</span>`;
        } else if (/\b(Input|Output|Explanation|class|if|while|public|private|protected|return|static|void|int|boolean|new|this|for|else)\b/.test(match)) {
          // Java keywords and specific words in green
          return `<span style="color: #4ec9b0;">${match}</span>`;
        } else if (/\b(true|false)\b/.test(match)) {
          // Boolean values in blue
          return `<span style="color: #569cd6;">${match}</span>`;
        } else if (/^\d+$/.test(match)) {
          // Numbers in green
          return `<span style="color: #b5cea8;">${match}</span>`;
        } else if (/[[\]]/.test(match)) {
          // Square brackets in yellow
          return `<span style="color: #FFD700;">${match}</span>`;
        } else if (/[><{}()]/.test(match)) {
          // Other brackets and symbols in white
          return `<span style="color: #ffffff;">${match}</span>`;
        }
        return match;
      }
    );
  };

  return (
    <Card title="</>Code" titleBgColor="#2f3136">
      <StyledSolution dangerouslySetInnerHTML={{ __html: updateContent(solution) }} />
    </Card>
  )
}

export default Solution