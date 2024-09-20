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
import { Item } from '../../pages/Perfil'

const Sidebar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, item: Item) => {
      const valorAtual = item.cardapio
        .map((cardapio) => cardapio.preco)
        .reduce((soma, preco) => soma + preco, 0)

      return acumulador + valorAtual
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <Aside>
        {items.map((item) => (
          <ul key={item.id}>
            {item.cardapio.map((cardapio) => (
              <CardIitem key={cardapio.id}>
                <Image src={cardapio.foto} alt={cardapio.nome} />
                <div>
                  <h3>{cardapio.nome}</h3>
                  <Price>{formataPreco(cardapio.preco)}</Price>
                  <Icon />
                </div>
              </CardIitem>
            ))}
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
