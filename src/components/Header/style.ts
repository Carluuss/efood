import styled from 'styled-components'
import { cores } from '../../style'

export const HeaderBar = styled.header`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 65px;
  }
`
