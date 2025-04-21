import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProblemsList from './ProblemsList'
import Problem from '../problem/Problem'
import styled from 'styled-components'
import Intro from './Intro'

const StyledHome = styled('section')`
display: flex;
/* background-color: #0f172a; */
margin: 0;
padding: 0;
width: 100%;
min-height: 100vh;
height: fit-content;
/* background: linear-gradient(to left,#0f172a,rgb(79, 68, 68)); */
background: linear-gradient(to left,#222222,#2f3136);
`

const Home = () => {
  return (
    <StyledHome>
      
      <BrowserRouter>
        <Routes>
          <Route path="/dsa-practice" element={<ProblemsList />} />
          <Route path="/dsa-practice/problems/:id" element={<Problem />} />
        </Routes>
      </BrowserRouter>
      
    </StyledHome>

  )
}

export default Home