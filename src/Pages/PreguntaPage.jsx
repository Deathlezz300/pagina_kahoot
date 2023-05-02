import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePregunta } from "../store/VetQuiz/thunks";
import { AddRespuesta, AumentarIncorrectas, IncrementPosicion, ReestablecerTiempo, RestarTiempo } from "../store/VetQuiz/VetQuizSlice";
import { useSelector } from "react-redux";
import { PreguntaComp } from "../Components/PreguntaComp";
import '../assets/css/PreguntaPage.css'
import logo from '../assets/images/logo.png'
import { DeshabilitarBotones, HabilitarBotones } from "../Helpers/StylesAnimation";
import { useRef } from "react";
import correcto from '../assets/images/correcto.png'
import incorrecto from '../assets/images/incorrecto.png'

let numero=60;

export const PreguntaPage = () => {


  const {id}=useParams();

  const dispatch=useDispatch();

  const {tiempo,active,posicion,tipo}=useSelector(state=>state.VetQuiz);

  const navegacion=useNavigate();

  const timerRef=useRef();

  useEffect(() => {
    if(tiempo===0){
      DeshabilitarBotones(false);
      dispatch(AddRespuesta({idPregunta:active.id,respuestaCorrecta:active.respuesta,respuestaTomada:'No seleccionó',valida:false}));
      numero=60;
      dispatch(AumentarIncorrectas());
      dispatch(IncrementPosicion());
    }
  }, [tiempo])
  

  useEffect(() => {
    timerRef.current=setInterval(()=>{
      dispatch(RestarTiempo());
      numero--;
      if(numero==0){
        clearInterval(timerRef.current);
      }
    },1000);
    dispatch(setActivePregunta(id));
  },[id]);
  
  const onSiguientePregunta=()=>{
    HabilitarBotones();
    dispatch(ReestablecerTiempo());

  }

  const onStopIncrement=()=>{
    clearInterval(timerRef.current);
    numero=60;
  }


  return (
    <section  className="box-preguntaPage">
      <div className="box-temporizador">
        <img src={logo} alt="" className="imagen-logo-pregunta" />
        <p className="texto-tiempo">{tiempo}</p>
      </div>
      <div className={`box-pregunta ${tipo==='Verdadero o falso' ? 'box-pregunta-grande' : ''}`}>
        <p id="pregunta" className={`texto-pregunta ${tipo==='Verdadero o falso' ? 'pregunta-grande' : ''}`}>{active.pregunta}</p>
        <img className="imagen-respuesta" id="correcto" src={correcto} alt="" />
        <img className="imagen-respuesta" id="incorrecto" src={incorrecto} alt="" />
      </div>
      <section className="box-opciones-padre">
        <div className="box-opciones">
          {
            active.opciones.map((opcion,indice)=>{
              return <PreguntaComp key={indice} tipo={active.tipo} id={active.id} indice={indice} respuesta={active.respuesta} opcion={opcion} Referencia={()=>onStopIncrement()}/>
            })
          }
        </div>
      </section>
      <div className="box-boton-siguiente">
        <Link to={ posicion<7 ? `/pregunta/${posicion}` : '/resultados'} replace type="button" onClick={onSiguientePregunta} id="boton-next" className="boton-siguiente btn-desaparecer">{posicion<10 ? 'Siguiente' : 'Terminar'}</Link>
      </div>
    </section>
  )
}
