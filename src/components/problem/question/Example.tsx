import { ExampleState } from './Question'
import styled from 'styled-components'

const StyledExample = styled('section')`
  margin:0.5rem 0 1rem 0;
  `


const StyledExampleHeading = styled('h3')`
  margin:0.5rem 0 1rem 0;
  font-size: 1rem;
  `

const StyledExampleSection = styled('div')`
margin-top: 1rem;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
background-color: #222222;
padding: 1rem;
justify-content: space-between;
font-family: monospace;
font-size: 0.9rem;

& div {
  margin: 0.5rem 0;
}
`

const Example = ({ id, input, output, explanation }: ExampleState) => {

  const updateContent = (content: string) => {
    return content.replace(
      /\b(Input|Output|Explanation|class|if|while|public|private|protected|return|static|void|int|boolean|new|this|for|else|true|false)\b|\d+|[><[\]{}()]/g,
      (match) => {
        if (/\b(Input|Output|Explanation|class|if|while|public|private|protected|return|static|void|int|boolean|new|this|for|else)\b/.test(match)) {
          // Java keywords and specific words in green
          return `<span style="color: #4ec9b0;">${match}</span>`;
        } else if (/\b(true|false)\b/.test(match)) {
          // Boolean values in blue
          return `<span style="color: #569cd6;">${match}</span>`;
        } else if (/^\d+$/.test(match)) {
          // Numbers in green
          return `<span style="color: #b5cea8;">${match}</span>`;
        } else if (/[><[\]{}()]/.test(match)) {
          // Brackets and symbols in white
          return `<span style="color: #ffffff;">${match}</span>`;
        }
        return match;
      }
    );
  };

  return (
    <StyledExample>
      <StyledExampleHeading>Example {id}:</StyledExampleHeading>
      <StyledExampleSection>
        <div dangerouslySetInnerHTML={{ __html: updateContent(`Input: ${input}`) }}></div>
        <div dangerouslySetInnerHTML={{ __html:  updateContent(`Output: ${output}`) }}></div>
        { explanation && <div dangerouslySetInnerHTML={{ __html:  updateContent(`Explanation: ${explanation}`) }}></div>}
      </StyledExampleSection>
    </StyledExample>
  )
}

export default Example