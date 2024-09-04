import styled from 'styled-components'
import { cores } from '../../style'
import { Botao } from '../ProdutoPerfil/style'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  color: ${cores.branco};
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 24px;

  header {
    display: flex;
    gap: 20px;
    padding: 22px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      margin: 16px 0px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  header > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  ${Botao} {
    width: 218px;
    padding: 4px;
    margin-top: 16px;
  }
`

export const Content = styled.div`
  background-color: ${cores.vermelho};
  padding: 10px;
  margin-bottom: 24px;
  display: flex;
  align-items: end;

  > img {
    cursor: pointer;
  }
`
