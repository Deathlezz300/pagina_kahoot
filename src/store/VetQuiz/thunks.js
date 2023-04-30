import { setActive } from "./VetQuizSlice";

export const setActivePregunta=(id)=>{
    return (dispatch,getState)=>{
        const {preguntas}=getState().VetQuiz;
        const pregunta=preguntas[id];
        dispatch(setActive(pregunta));
    }
}

