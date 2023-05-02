import { createSlice } from '@reduxjs/toolkit';

export const VetQuizSlice = createSlice({
    name: 'VetQuiz',
    initialState: {
      preguntas:[],
      posicion:0,
      usuario:null,
      active:{opciones:[]},
      respuestas:[],
      tiempo:60,
      correctas:0,
      incorrectas:0,
      tipo:null
    },
    reducers: {
        setUsuario:(state,{payload})=>{
            state.usuario=payload;
        },
        IncrementPosicion:(state)=>{
            state.posicion=state.posicion+1;
        },
        setActive:(state,{payload})=>{
            state.active=payload;
        },
        AddRespuesta:(state,{payload})=>{
            state.respuestas.push(payload);
            
        },
        RestarTiempo:(state)=>{
            state.tiempo=state.tiempo-1;
        },
        ReestablecerTiempo:(state)=>{
            state.tiempo=60;
        },
        AumentarCorrectas:(state)=>{
            state.correctas=state.correctas+1;
        },
        AumentarIncorrectas:(state)=>{
            state.incorrectas=state.incorrectas+1;
        },
        setPreguntas:(state,{payload})=>{
            state.preguntas=payload;
        },
        setTipo:(state,{payload})=>{
            state.tipo=payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setUsuario,IncrementPosicion,setActive,AddRespuesta,RestarTiempo,ReestablecerTiempo,AumentarCorrectas,AumentarIncorrectas,setPreguntas,setTipo } = VetQuizSlice.actions;