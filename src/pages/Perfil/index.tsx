import Banner from '../../components/Banner'
import ListaPerfil from '../../components/ListaPerfil'

import Header from '../../components/Header'

import { useGetItemIdQuery, useGetItemQuery } from '../../services/api'
import Sidebar from '../../components/Sidebar'
import { useParams } from 'react-router-dom'

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
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Perfil = () => {
  const { id } = useParams()
  const { data: comida } = useGetItemIdQuery(id!)

  if (comida) {
    return (
      <>
        <Header />
        <Banner tipo={comida.tipo} title={comida.titulo} image={comida.capa} />
        <ListaPerfil item={comida} />
        <Sidebar />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Perfil
