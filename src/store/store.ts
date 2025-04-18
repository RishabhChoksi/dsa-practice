import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './app-slice';

const store = configureStore({
    reducer: {
        app: AppReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware(),
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>
export default store;