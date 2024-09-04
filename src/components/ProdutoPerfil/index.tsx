import { Cardapio } from '../../pages/Perfil'
import { Botao, Card, Descricao, Titulo, Image } from './style'

type Props = {
  title?: string
  description?: string
  image?: string
  onClick?: () => void
  cardapio?: Cardapio[]
}

const ProdutoPerfil = ({ title, description = '', image, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 70) + '...'
    }
    return descricao
  }

  return (
    <Card onClick={onClick}>
      <Image src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{getDescricao(description)}</Descricao>
      <Botao onClick={onClick}>Ver detalhes</Botao>
    </Card>
  )
}

export default ProdutoPerfil
