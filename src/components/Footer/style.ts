import styled from 'styled-components'
import { cores } from '../../style'

export const FooterBar = styled.footer`
  margin-top: 120px;

  .container {
    max-width: 620px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 65px;
    display: flex;
    flex-direction: column;
  }
`
export const ContainerLogos = styled.div`
  display: flex;
  margin-top: 32px;

  div {
    margin-right: 8px;
  }
`
export const Paragrafo = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: ${cores.vermelho};
  margin-top: 80px;
`
