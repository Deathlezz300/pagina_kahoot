import { useSelector } from "react-redux"
import correcto from '../assets/images/correcto.png';
import incorrecto from '../assets/images/incorrecto.png'
import { PreguntaBox } from "../Components/PreguntaBox";
import '../assets/css/ResultadosPage.css'
import { NavBar } from "../Components/NavBar";

export const ResultadosPage = () => {

  const {correctas,incorrectas,usuario,preguntas,respuestas}=useSelector(state=>state.VetQuiz);


  return (
    <>
    <NavBar/>
    <section className="box-padre-resultados">
      <section className="box-resultados-img">
        <h2 className="usuario-resultados">{usuario}</h2>
        <p className="texto-resultados">Estos son tus resultados:</p>
        <div className="box-img-results-padre">
          <div className="box-img-resultados">
            <img src={correcto} alt="" className="img-resultados" />
            <p className="texto-img-resultados">{correctas} Correctas</p>
          </div>
          <div className="box-img-resultados">
            <img src={incorrecto} alt="" className="img-resultados" />
            <p className="texto-img-resultados">{incorrectas} Incorrectas</p>
          </div>
        </div>
      </section>
      <section className="box-resultados-corr">
        {
          preguntas.map((pregunta,indice)=>{
             return <PreguntaBox key={indice} indice={indice} opciones={pregunta.opciones} respuesta={pregunta.respuesta} seleccionada={respuestas[indice].respuestaTomada} pregunta={pregunta.pregunta} decision={respuestas[indice].valida}/>
          })
        }
      </section>
    </section>
    </>
  )
}
