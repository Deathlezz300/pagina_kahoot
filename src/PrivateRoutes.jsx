import { Navigate, Route, Routes } from "react-router-dom"
import { PreguntaPage } from "./Pages/PreguntaPage"
import { ResultadosPage } from "./Pages/ResultadosPage"
import { useSelector } from "react-redux"
import { HomePage } from "./Pages/HomePage"

export const PrivateRoutes = () => {
  
  const {posicion,tipo}=useSelector(state=>state.VetQuiz);
  
  return (
    <>
        <Routes>
            {
              posicion<7 ? <Route path="pregunta/:id" element={<PreguntaPage/>}/> : <Route path="resultados" element={<ResultadosPage/>}/> 
            }
            <Route path="home" element={<HomePage/>}/>
            <Route path="/*" element={<Navigate to={ tipo!=null ?  posicion<7 ? `/pregunta/${posicion}` : '/resultados' :'/home'}/>}/>
        </Routes>
    </>
  )
}
