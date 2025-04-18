import styled from 'styled-components';

const StyledCard = styled("section")`
    background-color: #202020;
    color: white;
    border: 0.1px solid gray;
    border-radius: 0.4rem;
    padding:0;
    margin: 0.5rem 0.25rem;
    flex-grow:0.7;
    flex-basis: 0;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`

const StyledTitle = styled("h5")<{titleBgColor:string}>`
   border-radius: 0.4rem 0.4rem 0 0;
    padding:0.4rem 0.5rem;
    margin: 0;
  border-bottom: 0.1px solid gray;
  background-color: ${p=>p.titleBgColor};
   position: sticky;
   font-size: 0.8rem;
  top: 0; 
`

const Card = ({ title, children, titleBgColor }: any) => {
  return (
    <StyledCard>
      <StyledTitle titleBgColor={titleBgColor}>{title}</StyledTitle>
      {children}
    </StyledCard>
  )
}

export default Card;