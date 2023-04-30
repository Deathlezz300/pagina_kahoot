import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePregunta } from "../store/VetQuiz/thunks";
import { RestarTiempo } from "../store/VetQuiz/VetQuizSlice";
import { useSelector } from "react-redux";
import { PreguntaComp } from "../Components/PreguntaComp";
import '../assets/css/PreguntaPage.css'
import logo from '../assets/images/logo.png'
import { HabilitarBotones } from "../Helpers/StylesAnimation";

let numero=60;

export const PreguntaPage = () => {


  const {id}=useParams();

  const dispatch=useDispatch();

  const {tiempo,active,posicion}=useSelector(state=>state.VetQuiz);

  const navegacion=useNavigate();

  useEffect(() => {
    // const timer=setInterval(()=>{
    //   dispatch(RestarTiempo());
    //   numero--;
    //   console.log(numero);
    //   if(numero==0){
    //     clearInterval(timer);
    //   }
    // },1000);
    dispatch(setActivePregunta(id));
  },[id]);
  
  const onSiguientePregunta=()=>{
    HabilitarBotones();
  }

  return (
    <section className="box-preguntaPage">
      <div className="box-temporizador">
        <img src={logo} alt="" className="imagen-logo-pregunta" />
        <p className="texto-tiempo">{tiempo}</p>
      </div>
      <div className="box-pregunta">
        <p className="texto-pregunta">{active.pregunta}</p>
      </div>
      <section className="box-opciones-padre">
        <div className="box-opciones">
          {
            active.opciones.map((opcion,indice)=>{
              return <PreguntaComp key={indice} id={active.id} indice={indice} respuesta={active.respuesta} opcion={opcion}/>
            })
          }
        </div>
      </section>
      <div className="box-boton-siguiente">
        <Link to={`/pregunta/${posicion}`} disabled={true} type="button" onClick={onSiguientePregunta} id="boton-next" className="boton-siguiente">Siguiente</Link>
      </div>
    </section>
  )
}
