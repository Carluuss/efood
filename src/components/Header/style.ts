import styled from 'styled-components'
import { cores } from '../../style'
import backgroundImg from '../../assets/background.png'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
  background-image: url(${backgroundImg});

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 65px 0;
    text-align: center;
  }

  img {
    display: block;
  }
`

export const Links = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`
