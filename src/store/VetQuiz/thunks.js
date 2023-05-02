import { seleccionarPreguntas } from "../../Helpers/Data";
import { setActive, setPreguntas, setTipo } from "./VetQuizSlice";

export const setActivePregunta=(id)=>{
    return (dispatch,getState)=>{
        const {preguntas}=getState().VetQuiz;
        const pregunta=preguntas[id];
        dispatch(setActive(pregunta));
    }
}

export const onSetPreguntasTipo=(tipo)=>{
    return (dispatch)=>{
        dispatch(setTipo(tipo));
        const preguntas=seleccionarPreguntas(tipo);
        dispatch(setPreguntas(preguntas));
    }
}