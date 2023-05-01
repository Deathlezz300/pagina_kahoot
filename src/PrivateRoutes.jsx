import { Navigate, Route, Routes } from "react-router-dom"
import { PreguntaPage } from "./Pages/PreguntaPage"
import { ResultadosPage } from "./Pages/ResultadosPage"
import { useSelector } from "react-redux"

export const PrivateRoutes = () => {
  
  const {posicion}=useSelector(state=>state.VetQuiz);
  
  return (
    <>
        <Routes>
            {
              posicion<10 ? <Route path="pregunta/:id" element={<PreguntaPage/>}/> : <Route path="resultados" element={<ResultadosPage/>}/> 
            }
            <Route path="/*" element={<Navigate to={posicion<10 ? `/pregunta/${posicion}` : '/resultados'}/>}/>
        </Routes>
    </>
  )
}
