import styled from 'styled-components'
import { cores } from '../../style'

import lixeiraIcon from '../../assets/lixeira-de-reciclagem.png'
import { Botao } from '../ProdutoPerfil/style'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Aside = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 24px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  > div {
    display: flex;
    color: ${cores.bege};
    justify-content: space-between;
  }

  ${Botao} {
  }
`

export const CardIitem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 18px;
  }
`
export const Price = styled.span`
  display: block;
  color: ${cores.vermelho};
  font-size: 14px;
  padding-top: 16px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Image = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const Icon = styled.button`
  background-image: url(${lixeiraIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const CartStage = styled.div`
  display: flex;
  flex-direction: column;
  &.is-checkout {
    display: none;
  }
`
