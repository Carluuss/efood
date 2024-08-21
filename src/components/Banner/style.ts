import styled from 'styled-components'
import { cores } from '../../style'

export const Hero = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  color: ${cores.branco};
`
export const Paragrafo = styled.p`
  font-size: 32px;
  font-weight: lighter;
  padding-top: 25px;
  padding-bottom: 220px;
`
export const Titulo = styled.h2`
  font-size: 32px;
  padding-top: 214px;
`
