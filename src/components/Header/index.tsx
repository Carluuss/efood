import { HeaderBar } from './style'

import logo from '../../assets/logo.png'
const Header = () => (
  <HeaderBar>
    <div className="container">
      <p>Restaurantes</p>

      <img src={logo} alt="Logo" />

      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderBar>
)

export default Header
