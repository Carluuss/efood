import { HeaderBar } from './style'

import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const { cardapio } = useSelector((state: RootReducer) => state.cart)
  return (
    <HeaderBar>
      <div className="container">
        <p>Restaurantes</p>

        <img src={logo} alt="Logo" />

        <p>{cardapio.length} produto(s) no carrinho</p>
      </div>
    </HeaderBar>
  )
}

export default Header
