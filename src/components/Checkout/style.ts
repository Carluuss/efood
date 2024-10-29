import styled from 'styled-components'
import { cores } from '../../style'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`
export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
    display: block;
    color: ${cores.bege};
  }

  input {
    height: 30px;
    padding: 0 8px;
    width: 100%;
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};

    &.error {
      border: 1px solid red;
    }
  }
`

export const DeliveryContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }
`

export const Title = styled.h3`
  color: ${cores.bege};
  font-size: 16px;
`

export const Form = styled.form`
  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.bege};
  }

  span {
    font-size: 12px;
    color: ${cores.bege};
    display: block;
    line-height: 22px;
  }
  small {
    color: ${cores.bege};
  }
`
export const PaymentContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }
`
export const ConfirmedContainer = styled.div`
  display: flex;
  .margin-top {
    margin-top: 24px;
  }
  flex-direction: column;
  &.show {
    display: block;
  }
`
