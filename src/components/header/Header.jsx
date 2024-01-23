import './header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div id='header'>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
    </div>
  )
}

export default Header