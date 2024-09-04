import Banner from '../../components/Banner'
import ListaPerfil from '../../components/ListaPerfil'

import pizza from '../../assets/pizza.png'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export interface Cardapio {
  foto: string
  preco?: number
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
  const [itemPerfil, setItemPerfil] = useState<Item[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setItemPerfil(res))
  })

  return (
    <>
      <Header />
      <Banner />
      <ListaPerfil item={itemPerfil} />
    </>
  )
}

export default Perfil
