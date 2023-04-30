import { createSlice } from '@reduxjs/toolkit';
import { preguntasData } from '../../Helpers/Data';

export const VetQuizSlice = createSlice({
    name: 'VetQuiz',
    initialState: {
      preguntas:preguntasData,
      posicion:0,
      usuario:null,
      active:{opciones:[]},
      respuestas:[],
      tiempo:60
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
        }
    }
});


// Action creators are generated for each case reducer function
export const { setUsuario,IncrementPosicion,setActive,AddRespuesta,RestarTiempo } = VetQuizSlice.actions;