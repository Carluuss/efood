import Tag from '../Tag'
import {
  Avaliacao,
  Botao,
  Card,
  Descricao,
  Image,
  Infos,
  Titulo
} from './style'

import estrela from '../../assets/estrela.png'

type Props = {
  title: string
  description: string
  image: string
  assessment: number
  infos: string[]
}

const ProdutoHome = ({
  title,
  description,
  image,
  assessment,
  infos
}: Props) => (
  <Card>
    <Image src={image} alt={title} />

    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <Avaliacao>
      <Titulo>{title}</Titulo>
      <p>{assessment}</p>
      <div>
        <img src={estrela} alt="estrela" />
      </div>
    </Avaliacao>
    <Descricao>{description}</Descricao>
    <Botao>Saiba mais</Botao>
  </Card>
)

export default ProdutoHome
