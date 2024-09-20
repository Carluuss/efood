import Banner from '../../components/Banner'
import ListaPerfil from '../../components/ListaPerfil'

import Header from '../../components/Header'

import { useGetItemQuery } from '../../services/api'
import Sidebar from '../../components/Sidebar'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Item = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Perfil = () => {
  const { data: itemPerfil } = useGetItemQuery()

  if (itemPerfil) {
    return (
      <>
        <Header />
        <Banner />
        <ListaPerfil item={itemPerfil} />
        <Sidebar />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Perfil
