import '../assets/css/PreguntaBox.css'

export const PreguntaBox = ({indice,pregunta,respuesta,seleccionada,opciones=[],decision}) => {
  return (
    <div className="box-pregunta-espe">
        <h3 className="texto-pregunta-resultados">Pregunta {indice+1}</h3>
        <p className="pregunta-resultados">{pregunta}</p>
        <p className="texto-opciones-resultados">Opciones</p>
        <div className='box-opciones-result-fin'>
        {
            opciones.map((opcion,indice)=>{
                return <p key={indice} className='pregunta-resultados'>{opcion}</p>
            })
        }
        </div>
        <p className="texto-opciones-resultados">Tu selección</p>
        <p className={`pregunta-resultados ${decision ? 'color_verde' : 'color_rojo'}`}>{seleccionada}</p>
        <p className="texto-opciones-resultados">Respuesta Correcta</p>
        <p className="pregunta-resultados color_verde">{respuesta}</p>
    </div>
  )
}
