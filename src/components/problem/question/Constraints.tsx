import styled from "styled-components"

const StyledConstraint = styled('div')`
  font-size: 0.9rem;
  padding: 1rem;
  background-color: #222222;
    font-family: monospace;

    & ul {
      margin: 0;
      padding: 0 0 0 1rem;
    }
  `

const StyledConstraintHeading = styled('h3')`
  margin: 0.5rem 0 1rem 0;
  font-size: 1rem;
  `

const Constraints = (constraints:string[]) => {

  const updateContent = (content: string) => {
    return content.replace(
      /(\d+)\^(\d+)|\d+/g,
      (match, base, exponent) => {
        if (base && exponent) {
          // Handle numbers with superscript
          return `<span style="color: #b5cea8;">${base}<sup>${exponent}</sup></span>`;
        } else {
          // Handle standalone numbers
          return `<span style="color: #b5cea8;">${match}</span>`;
        }
      }
    );
  };
  
  return (
   <>
    <StyledConstraintHeading>Constraints:</StyledConstraintHeading>
    <StyledConstraint>
    <ul>
      {Object.values(constraints).map((c, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: updateContent(c) }}></li>
      ))}
    </ul>
  </StyledConstraint>
   </>
  )
}

export default Constraints