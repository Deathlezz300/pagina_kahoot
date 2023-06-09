
import { useDispatch } from "react-redux";
import { AddRespuesta, AumentarCorrectas, AumentarIncorrectas, IncrementPosicion } from "../store/VetQuiz/VetQuizSlice";
import '../assets/css/PreguntaComp.css'
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

export const PreguntaComp = ({id,indice,respuesta,opcion,Referencia,tipo}) => {


  const dispatch=useDispatch();


  const onClickOpcion=()=>{
    Referencia();
    const decision=respuesta===opcion ? true : false;
    DeshabilitarBotones(decision);
    if(decision){
        dispatch(AumentarCorrectas());
    }else{
        dispatch(AumentarIncorrectas());
    }
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
    <button id={indice} onClick={onClickOpcion} className={`pregunta-box ${EstilosOpciones[indice].color} ${tipo==='Verdadero o falso' ? 'pregunta-box-grande' : ''}`}>
        <img className="figura" src="" alt=""/>
        <p className="texto-opcion">{opcion}</p>
    </button>
  )
}
