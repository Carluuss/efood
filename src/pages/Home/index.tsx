import HeaderHome from '../../components/HeaderHome'
import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'
import ListaHome from '../../components/ListaHome'
import { useGetItemQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetItemQuery()

  if (restaurants) {
    return (
      <>
        <HeaderHome />
        <ListaHome item={restaurants} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
