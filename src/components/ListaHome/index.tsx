import ItemHome from '../../models/itemHome'
import ProdutoHome from '../ProdutoHome'
import { List } from './style'

export type Props = {
  item: ItemHome[]
}

const ListaHome = ({ item }: Props) => (
  <div className="container">
    <List>
      {item.map((item) => (
        <ProdutoHome
          key={item.id}
          description={item.description}
          image={item.image}
          title={item.title}
          assessment={item.assessment}
          infos={item.infos}
        />
      ))}
    </List>
  </div>
)

export default ListaHome
