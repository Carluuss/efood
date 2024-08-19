import backgroundImage from '../../assets/massa.png'
import { Hero, Paragrafo, Titulo } from './style'

const Banner = () => (
  <Hero style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
      <Paragrafo>Italiana</Paragrafo>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Hero>
)

export default Banner
