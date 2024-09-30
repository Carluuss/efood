import { useState } from 'react'
import ItemHome from '../../models/itemHome'
import { Item } from '../../pages/Perfil'
import ProdutoHome from '../ProdutoHome'
import { List } from './style'

export type Props = {
  item: Item[]
}

const ListaHome = ({ item }: Props) => {
  const [destaque, setDestaque] = useState('Destaque da semana')

  return (
    <div className="container">
      <List>
        {item.map((item) => (
          <ProdutoHome
            key={item.id}
            description={item.descricao}
            image={item.capa}
            title={item.titulo}
            assessment={item.avaliacao}
            infos={[item.destacado ? destaque : '', item.tipo].filter(Boolean)}
            linkPage={`/restaurantes/${item.id}`}
          />
        ))}
      </List>
    </div>
  )
}

export default ListaHome
