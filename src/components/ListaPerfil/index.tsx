import { useState } from 'react'
import { Cardapio, Item } from '../../pages/Perfil'
import ProdutoPerfil from '../ProdutoPerfil'
import { Content, List, Modal, ModalContent } from './style'

import close from '../../assets/close.png'
import { Botao } from '../ProdutoPerfil/style'

export type Props = {
  item: Item[]
}

interface ModalState {
  isVisible: boolean
  cardapio?: Cardapio[]
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

  return (
    <div className="container">
      <List>
        {item.map((item, index) => (
          <ProdutoPerfil
            key={item.id}
            description={item.descricao}
            image={item.capa}
            title={item.titulo}
            onClick={() => {
              setModal({
                isVisible: true,
                cardapio: item.cardapio
              })
            }}
          />
        ))}
      </List>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          {modal.cardapio?.map((cardItem) => (
            <Content key={cardItem.id}>
              <img onClick={() => closeModal()} src={close} alt="close" />
              <header>
                <img src={cardItem.foto} alt={cardItem.nome} />
                <div>
                  <h4>{cardItem.nome}</h4>

                  <p>{cardItem.descricao}</p>
                  <span>{cardItem.porcao}</span>
                  <Botao>
                    Adicionar ao carrinho - {formataPreco(cardItem.preco)}
                  </Botao>
                </div>
              </header>
            </Content>
          ))}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </div>
  )
}

export default ListaPerfil
