import { HeaderBar, Links, Text } from './style'

import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { cardapio } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div className="container">
        <Links to={'/'}>
          <p>Restaurantes</p>
        </Links>

        <Link to={'/'}>
          <img src={logo} alt="Logo" />
        </Link>

        <Text onClick={openCart}>{cardapio.length} produto(s) no carrinho</Text>
      </div>
    </HeaderBar>
  )
}

export default Header
