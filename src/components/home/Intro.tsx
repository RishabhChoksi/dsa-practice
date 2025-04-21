import styled from 'styled-components'

const StyledIntro = styled('section')`
font-family: monospace;
font-size: 1rem;
flex: 1;
color: #e1e1e1;
align-self: start;
margin-top: 10%;
margin-left: 1rem;
margin-right: 1rem;
position: sticky;
top:0;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
border-radius: 0.5rem;
padding: 1.5rem;
font-family: monospace;

`

const StyledIntroText = styled('p')`
    margin:0;
`

const StyledIntroLinks = styled('a')`
color: #e1e1e1;
text-decoration: none;
color: #c0caf5;
  
  & a {
  color: #a9b1d6;
  text-decoration: none;
  transition: color 0.2s;
  }

  & a:hover {
  text-decoration: underline;
}
`

const Intro = () => {
    return (
        <StyledIntro>
            <StyledIntroText> Hi, I'm Rishabh 👋  <br />
                I'm currently preparing for SDE interviews and built this platform to track and reflect on my DSA journey.
                Every solution here is written with clarity, efficiency, and learning in mind.
                <br />
                <p>🚀 Open to SDE roles — feel free to reach out via LinkedIn or check out my resume below.</p>

            </StyledIntroText>
            <br />
            <StyledIntroLinks>
                <a href="https://github.com/RishabhChoksi/dsa-practice/" target="_blank" rel="noreferrer">GitHub</a>&nbsp;•&nbsp;
                <a href="https://www.linkedin.com/in/rishabh-c-683306ab/" target="_blank" rel="noreferrer">LinkedIn</a>&nbsp;•&nbsp;
                <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </StyledIntroLinks>
        </StyledIntro>
    )
}

export default Intro