import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "./Pages/LoginPage"
import { useSelector } from "react-redux"
import { PrivateRoutes } from "./PrivateRoutes"

export const VetQuizRouter = () => {


  const {usuario}=useSelector(state=>state.VetQuiz);

  return (
    <>
    
    <Routes>
        {
            usuario===null ? <Route path="login" element={<LoginPage/>}/> :
            <Route path="/*" element={<PrivateRoutes/>}/>
            
        }
        <Route path="/*" element={<Navigate to='/login'/>}/>
    </Routes>
    
    </>
  )
}
