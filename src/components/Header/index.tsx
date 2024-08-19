import { HeaderBar } from './style'

import backgroundImg from '../../assets/background.png'

import logo from '../../assets/logo.png'
const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="container">
      <div>
        <a>Restaurantes</a>
      </div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <span>0 produto(s) no carrinho</span>
    </div>
  </HeaderBar>
)

export default Header
