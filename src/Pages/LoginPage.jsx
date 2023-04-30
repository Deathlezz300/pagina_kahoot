
import { useForm } from "../Hooks/useForm"
import '../assets/css/LoginPage.css'
import logo from '../assets/images/logo.png'
import { useDispatch } from "react-redux";
import { setUsuario } from "../store/VetQuiz/VetQuizSlice";

const initialState={
    usuario:''
};

export const LoginPage = () => {

  const {usuario,onInputChange}=useForm(initialState);

  const dispatch=useDispatch();

  const onUser=(evento)=>{
    evento.preventDefault();
    dispatch(setUsuario(usuario));
  }

  return (
    <>
    {/* <NavBar/> */}

        <section  className="box-login">
            <form id="form-login" onSubmit={onUser} className="box-form">
                <img src={logo} alt="" className="logo-login" />
                <div className="box-info-login">
                    <input required className='input-form' type="text" name='usuario' placeholder='Nombre' onChange={onInputChange} value={usuario} />
                    <button form="form-login" className="boton-login">Ingresar</button>
                </div>
            </form>
        </section>

    </>
  )
}
