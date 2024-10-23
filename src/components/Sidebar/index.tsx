import {
  Aside,
  CardContainer,
  CardIitem,
  CartStage,
  Icon,
  Image,
  Overlay,
  Price,
  Row
} from './style'

import pizza from '../../assets/pizza.png'
import { Botao } from '../ProdutoPerfil/style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../ListaPerfil'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import { Cardapio, Item } from '../../pages/Perfil'
import Checkout from '../Checkout'

const Sidebar = () => {
  const { isOpen, cardapio, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return cardapio.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Aside>
        <CartStage className={!isCart ? 'is-checkout' : ''}>
          {cardapio.map((cardapio) => (
            <ul key={cardapio.id}>
              <CardIitem key={cardapio.id}>
                <Image src={cardapio.foto} alt={cardapio.nome} />
                <div>
                  <h3>{cardapio.nome}</h3>
                  <Price>{formataPreco(cardapio.preco)}</Price>
                  <Icon onClick={() => removeItem(cardapio.id)} />
                </div>
              </CardIitem>
            </ul>
          ))}

          <Row>
            <p>Valor total</p>
            <p>{formataPreco(getTotalPrice())}</p>
          </Row>
          <Botao onClick={activeCheckout}>Continuar com a entrega</Botao>
        </CartStage>

        <Checkout checkoutStart={isAddress} valorTotal={getTotalPrice()} />
      </Aside>
    </CardContainer>
  )
}

export default Sidebar
