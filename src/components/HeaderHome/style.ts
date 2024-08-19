import styled from 'styled-components'
import { cores } from '../../style'

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 65px;

  .container {
    max-width: 580px;
  }
`

export const Titulo = styled.p`
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: bold;
  margin-top: 138px;
`
