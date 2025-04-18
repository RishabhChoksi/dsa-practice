import { createSlice } from "@reduxjs/toolkit";
import { ProblemState } from "../components/problem/Problem";
import problem from "../problems/problems.json";
import { QuestionState } from "../components/problem/question/Question";
import { SolutionState } from "../components/problem/solution/Solution";

export interface IndividualProblemState {
    problem: ProblemState;
    question: QuestionState;
    solution: SolutionState;
}

const appSlice = createSlice({
    name: "app-slice",
    initialState: problem as IndividualProblemState[],
    reducers: {
    }
})

const {reducer} = appSlice;

export default reducer;