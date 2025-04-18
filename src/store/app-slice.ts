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
        markVisited: (state,{payload}) => {
            if(localStorage.getItem("visited") === null){
                localStorage.setItem("visited",JSON.stringify([payload]));
            }else{
                const visited = JSON.parse(localStorage.getItem("visited") || "[]") as string[];
                if(!visited.includes(payload)){
                    visited.push(payload);
                    localStorage.setItem("visited",JSON.stringify(visited));
                }
            }
        },
        markStarred: (state,{payload}) => {
            if(localStorage.getItem("starred") === null){
                localStorage.setItem("starred",JSON.stringify([payload]));
            }else{
                const starred = JSON.parse(localStorage.getItem("starred") || "[]") as string[];
                if(!starred.includes(payload)){
                    starred.push(payload);
                    localStorage.setItem("starred",JSON.stringify(starred));
                }else{
                    const index = starred.indexOf(payload);
                    if(index !== -1){
                        starred.splice(index,1);
                        localStorage.setItem("starred",JSON.stringify(starred));
                    }
                }
            }
        }
    }
})

const {reducer,actions} = appSlice;
export const {markVisited,markStarred} = actions;

export default reducer;