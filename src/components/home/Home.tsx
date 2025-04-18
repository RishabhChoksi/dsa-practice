import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProblemsList from './ProblemsList'
import Problem from '../problem/Problem'

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dsa-practice" element={<ProblemsList />} />
        <Route path="/dsa-practice/problems/:id" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home