import { Navigate, Route, Routes } from "react-router-dom"
import { PreguntaPage } from "./Pages/PreguntaPage"
import { ResultadosPage } from "./Pages/ResultadosPage"


export const PrivateRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="pregunta/:id" element={<PreguntaPage/>}/>
            <Route path="resultados" element={<ResultadosPage/>}/>
            <Route path="/*" element={<Navigate to='/pregunta/0'/>}/>
        </Routes>
    </>
  )
}
