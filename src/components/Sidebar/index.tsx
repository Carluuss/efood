import {
  Aside,
  CardContainer,
  CardIitem,
  Icon,
  Image,
  Overlay,
  Price
} from './style'

import pizza from '../../assets/pizza.png'
import { Botao } from '../ProdutoPerfil/style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../ListaPerfil'
import { close, remove } from '../../store/reducers/cart'
import { Cardapio, Item } from '../../pages/Perfil'

const Sidebar = () => {
  const { isOpen, cardapio } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return cardapio.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Aside>
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

        <div>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </div>
        <Botao>Continuar com a entrega</Botao>
      </Aside>
    </CardContainer>
  )
}

export default Sidebar
