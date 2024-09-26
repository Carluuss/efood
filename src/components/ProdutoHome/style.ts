import styled from 'styled-components'
import { cores } from '../../style'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  max-width: 470px;
  position: relative;
  border: 1px solid ${cores.vermelho};
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
  white-space: nowrap;
`
export const Descricao = styled.p`
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  padding: 0 8px;
`

export const Botao = styled(Link)`
  background-color: ${cores.vermelho};
  display: inline-block;
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
  height: 217px;
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
  margin-top: 8px;
  padding: 8px;

  p {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    display: inline-block;
    margin-left: 8px;
  }
`
