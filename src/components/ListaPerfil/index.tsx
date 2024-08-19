import Item from '../../models/Item'
import ProdutoPerfil from '../ProdutoPerfil'
import { List } from './style'

export type Props = {
  item: Item[]
}

const ListaPerfil = ({ item }: Props) => (
  <div className="container">
    <List>
      {item.map((item) => (
        <ProdutoPerfil
          key={item.id}
          description={item.description}
          image={item.image}
          title={item.title}
        />
      ))}
    </List>
  </div>
)

export default ListaPerfil
