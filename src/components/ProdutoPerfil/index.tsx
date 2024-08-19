import { Botao, Card, Descricao, Titulo, Image } from './style'

type Props = {
  title: string
  description: string
  image: string
}

const ProdutoPerfil = ({ title, description, image }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar carrinho</Botao>
  </Card>
)

export default ProdutoPerfil
