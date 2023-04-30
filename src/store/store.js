import { configureStore } from "@reduxjs/toolkit";
import { VetQuizSlice } from "./VetQuiz/VetQuizSlice";

export const store=configureStore({
    reducer:{
        VetQuiz:VetQuizSlice.reducer
    }
});