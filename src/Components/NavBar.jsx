import logo from '../assets/images/logo.png'
import '../assets/css/NavBar.css'

export const NavBar = () => {
  return (
    <header className="head-logo">
        <img className="logo" src={logo} alt="" />
    </header>
  )
}
