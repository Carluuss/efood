import { Hero, Paragrafo, Titulo } from './style'

type Props = {
  title: string
  image: string
  tipo?: string
}

const Banner = ({ title, image, tipo }: Props) => (
  <Hero backgroundImage={image}>
    <div className="container">
      <Paragrafo>{tipo}</Paragrafo>
      <Titulo>{title}</Titulo>
    </div>
  </Hero>
)

export default Banner
