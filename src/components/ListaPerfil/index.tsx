import { useState } from 'react'
import { Cardapio, Item } from '../../pages/Perfil'
import ProdutoPerfil from '../ProdutoPerfil'
import { Content, List, Modal, ModalContent } from './style'

import close from '../../assets/close.png'
import { Botao } from '../ProdutoPerfil/style'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export type Props = {
  item: Item[]
}

interface ModalState {
  isVisible: boolean
  cardapio?: Cardapio
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaPerfil = ({ item }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () =>
    setModal({
      isVisible: false
    })

  const dispatch = useDispatch()

  const addToCart = () => {
    if (modal.cardapio) {
      dispatch(add(modal.cardapio))
      dispatch(open())
    }
  }

  return (
    <div className="container">
      {item.map((item, index) => (
        <List key={item.id}>
          {item.cardapio.map((cardapio) => (
            <ProdutoPerfil
              key={cardapio.id}
              description={cardapio.descricao}
              image={cardapio.foto}
              title={cardapio.nome}
              onClick={() => {
                setModal({
                  isVisible: true,
                  cardapio: cardapio
                })
              }}
            />
          ))}
        </List>
      ))}

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <Content key={modal.cardapio?.id}>
            <img onClick={() => closeModal()} src={close} alt="close" />
            <header>
              <img src={modal.cardapio?.foto} alt={modal.cardapio?.nome} />
              <div>
                <h4>{modal.cardapio?.nome}</h4>

                <p>{modal.cardapio?.descricao}</p>
                <span>{modal.cardapio?.porcao}</span>
                <Botao onClick={addToCart}>
                  Adicionar ao carrinho - {formataPreco(modal.cardapio?.preco)}
                </Botao>
              </div>
            </header>
          </Content>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </div>
  )
}

export default ListaPerfil
