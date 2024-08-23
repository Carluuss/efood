import styled from 'styled-components'
import { cores } from '../../style'
import backgroundImage from '../../assets/massa.png'

export const Hero = styled.div`
  display: block;
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  color: ${cores.branco};
  background-image: url(${backgroundImage});
`
export const Paragrafo = styled.p`
  font-size: 32px;
  font-weight: lighter;
  padding-top: 25px;
  padding-bottom: 150px;
`
export const Titulo = styled.h2`
  font-size: 32px;
`
