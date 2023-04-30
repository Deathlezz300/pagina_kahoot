import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { AddRespuesta, IncrementPosicion } from "../store/VetQuiz/VetQuizSlice";
import '../assets/css/PreguntaComp.css'
import { useSelector } from "react-redux";
import { DeshabilitarBotones } from "../Helpers/StylesAnimation";

const EstilosOpciones=[
    {
        color:'color_1'
    },
    {
        color:'color_2'
    },
    {
        color:'color_3'
    },
    {
        color:'color_4'
    }
]

export const PreguntaComp = ({id,indice,respuesta,opcion}) => {


  const dispatch=useDispatch();

  const {tiempo}=useSelector(state=>state.VetQuiz);

  const onClickOpcion=({target})=>{
    const decision= respuesta===opcion ? true : false;
    DeshabilitarBotones();
    const RespuestaToRedux={
        idPregunta:id,
        respuestaCorrecta:respuesta,
        respuestaTomada:opcion,
        valida:decision
    };
    dispatch(AddRespuesta(RespuestaToRedux));
    dispatch(IncrementPosicion());
  }

  return (
    <button id={indice} disabled={tiempo===0 ? true : false} onClick={onClickOpcion} className={`pregunta-box ${EstilosOpciones[indice].color}`}>
        <img className="figura" src="" alt=""/>
        <p className="texto-opcion">{opcion}</p>
    </button>
  )
}
