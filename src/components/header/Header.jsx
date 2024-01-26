import './header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header id="header">
        <img src={logo} alt="logo" />
        <h1>React Investment Calculator</h1>
    </header>
  )
}

export default Header