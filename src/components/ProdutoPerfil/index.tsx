import { Botao, Card, Descricao, Titulo, Image } from './style'

type Props = {
  title: string
  description: string
  image: string
  onClick?: () => void
}

const ProdutoPerfil = ({ title, description, image, onClick }: Props) => (
  <Card onClick={onClick}>
    <Image src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao onClick={onClick}>Ver detalhes</Botao>
  </Card>
)

export default ProdutoPerfil
