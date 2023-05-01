import { useSelector } from "react-redux"

export const ResultadosPage = () => {

  const {correctas,incorrectas}=useSelector(state=>state.VetQuiz);


  return (
    <div>ResultadosPage
      <p>Correctas: {correctas}</p>
      <p>Incorrectas: {incorrectas} </p>
    </div>
  )
}
