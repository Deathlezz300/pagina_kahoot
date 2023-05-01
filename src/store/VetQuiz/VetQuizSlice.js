import { createSlice } from '@reduxjs/toolkit';
import { seleccionarPreguntas } from '../../Helpers/Data';

export const VetQuizSlice = createSlice({
    name: 'VetQuiz',
    initialState: {
      preguntas:seleccionarPreguntas(),
      posicion:0,
      usuario:null,
      active:{opciones:[]},
      respuestas:[],
      tiempo:60,
      correctas:0,
      incorrectas:0
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
        }
    }
});


// Action creators are generated for each case reducer function
export const { setUsuario,IncrementPosicion,setActive,AddRespuesta,RestarTiempo,ReestablecerTiempo,AumentarCorrectas,AumentarIncorrectas } = VetQuizSlice.actions;