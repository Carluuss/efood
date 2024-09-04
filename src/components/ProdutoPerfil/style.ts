import styled from 'styled-components'
import { cores } from '../../style'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
  color: ${cores.bege};
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  padding: 8px 0;
`
export const Descricao = styled.p`
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  padding: 3px 5px;
  cursor: pointer;
  width: 100%;
  border: none;
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
`
export const Image = styled.img`
  width: 100%;
  height: 167px;
  display: inline-block;
`
