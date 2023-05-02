import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSetPreguntasTipo } from "../store/VetQuiz/thunks";
import '../assets/css/HomePage.css'
import logo from '../assets/images/logo.png'

export const HomePage = () => {
  
  const {usuario,posicion}=useSelector(state=>state.VetQuiz);
  
  const dispatch=useDispatch();

    const onButtonSelect=(tipo)=>{
        dispatch(onSetPreguntasTipo(tipo));
    }


    return (
    <>
        <section className="box-padre-home">
            <div className="box-data-home">
                <h2 className="user-home">{usuario}</h2>
                <img className="logo-home" src={logo} alt="" />
                <p className="texto-home">Selecciona una opcion para empezar el Quiz</p>
                <div className="box-botones-home">
                    <Link onClick={()=>onButtonSelect('Multiple')} to={`/pregunta/${posicion}`} replace className="boton-opciones-home">Selección multiple</Link>
                    <Link onClick={()=>onButtonSelect('Verdadero o falso')} to={`/pregunta/${posicion}`} replace className="boton-opciones-home">Verdadero y Falso</Link>
                    <Link onClick={()=>onButtonSelect('Completar')} to={`/pregunta/${posicion}`} replace className="boton-opciones-home">Completar frase</Link>
                    <Link onClick={()=>onButtonSelect('todos')} to={`/pregunta/${posicion}`} replace className="boton-opciones-home">Todas</Link>
                </div>
            </div>
        </section>
    </>
  )
}
