import styled from 'styled-components'
import { cores } from '../../style'

export const Card = styled.div`
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  max-width: 480px;
  position: relative;
  border: 1px solid ${cores.vermelho};
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  padding: 0 8px;
`

export const Botao = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-weight: 700;
  margin: 8px;
`
export const Image = styled.img`
  width: 100%;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Avaliacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  margin-top: 8px;
  padding: 8px;

  img {
    display: block;
  }

  p {
    margin-left: 310px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }
`
