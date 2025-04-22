import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProblemsList from './ProblemsList'
import Problem from '../problem/Problem'
import styled from 'styled-components'

const StyledHome = styled('section')`
display: flex;
margin: 0;
padding: 0;
width: 100%;
min-height: 100vh;
height: fit-content;
background: linear-gradient(to left,#222222,#2f3136);
`

const Home = () => {
  return (
    <StyledHome>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProblemsList />} />
          <Route path="/problems/:id" element={<Problem />} />
        </Routes>
      </BrowserRouter>
    </StyledHome>

  )
}

export default Home