import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { Botao } from '../../components/ProdutoPerfil/style'
import InputMask from 'react-input-mask'
import {
  ConfirmedContainer,
  DeliveryContainer,
  Form,
  InputGroup,
  PaymentContainer,
  Row,
  Title
} from './style'
import { formataPreco } from '../ListaPerfil'

import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import {
  backtoCart,
  closeAndFinish,
  confirmed,
  payment,
  startCheckout
} from '../../store/reducers/cart'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'

type Props = {
  checkoutStart?: boolean
  valorTotal: number
}

const Checkout = ({ checkoutStart, valorTotal }: Props) => {
  const [purchase, { isSuccess, data, isError }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const { cardapio, isPayment, isConfirmed } = useSelector(
    (state: RootReducer) => state.cart
  )

  const finish = () => {
    dispatch(closeAndFinish())
  }
  const backCart = () => {
    dispatch(backtoCart())
  }
  const backAdress = () => {
    dispatch(startCheckout())
  }

  const activePayment = () => {
    if (
      form.values.remetente &&
      form.values.endereco &&
      form.values.cidade &&
      form.values.cep &&
      form.values.numero
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const activeConfirmed = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cvv &&
      form.values.anoDeVencimento &&
      form.values.mesDeVencimento
    ) {
      dispatch(confirmed())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
    console.log(cardapio)
  }

  const form = useFormik({
    initialValues: {
      remetente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      anoDeVencimento: '',
      mesDeVencimento: ''
    },
    validationSchema: Yup.object({
      remetente: Yup.string().required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      anoDeVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      mesDeVencimento: Yup.string().when((values, schema) =>
        isPayment
          ? schema
              .required('O campo é obrigatório')
              .test('valid-mes', 'O mês deve ser um mês existente', (value) => {
                const mes = Number(value)
                return mes >= 1 && mes <= 12
              })
          : schema
      )
    }),

    onSubmit: (values) => {
      const products = cardapio.map((item) => ({
        id: item.id,
        price: item.preco
      }))

      purchase({
        delivery: {
          receiver: values.remetente,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesDeVencimento),
              year: Number(values.anoDeVencimento)
            }
          }
        },
        products
      })
    }
  })

  const checkInputHasError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) {
      return message
    }
    return ''
  }

  useEffect(() => {
    if (isSuccess && data) {
      console.log('Compra realizada com sucesso', data)
    }
    if (isError) {
      console.error('Erro ao realizar a compra')
    }
  }, [isSuccess, isError, data])

  return (
    <>
      {isConfirmed && isSuccess && data ? (
        <ConfirmedContainer>
          <Title>Pedido realizado - {data.orderId}</Title>
          <span className="margin-top">
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </span>
          <span className="margin-top">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.{' '}
          </span>
          <span className="margin-top">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </span>
          <span className="margin-top">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </span>
          <Botao onClick={finish} className="margin-top">
            Concluir
          </Botao>
        </ConfirmedContainer>
      ) : (
        <Form onSubmit={form.handleSubmit}>
          <DeliveryContainer className={checkoutStart ? 'show' : ''}>
            <Title>Entrega</Title>
            <InputGroup>
              <label htmlFor="remetente">Quem irá receber</label>
              <input
                type="text"
                name="remetente"
                id="remetente"
                value={form.values.remetente}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('remetente') ? 'error' : ''}
              />
              <small>
                {checkInputHasError('remetente', form.errors.remetente)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                name="endereco"
                id="endereco"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('endereco') ? 'error' : ''}
              />
              <small>
                {checkInputHasError('endereco', form.errors.endereco)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cidade') ? 'error' : ''}
              />
              <small>{checkInputHasError('cidade', form.errors.cidade)}</small>
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  type="text"
                  name="cep"
                  id="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cep') ? 'error' : ''}
                  mask="99999-999"
                />
                <small>{checkInputHasError('cep', form.errors.cep)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="numero">Número</label>
                <InputMask
                  type="text"
                  name="numero"
                  id="numero"
                  value={form.values.numero}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numero') ? 'error' : ''}
                  mask="999"
                />
                <small>
                  {checkInputHasError('numero', form.errors.numero)}
                </small>
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input
                type="text"
                name="complemento"
                id="complemento"
                value={form.values.complemento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <Botao className="margin-top" type="button" onClick={activePayment}>
              Continuar com o pagamento
            </Botao>
            <Botao onClick={backCart}>Voltar para o carrinho</Botao>
          </DeliveryContainer>

          <PaymentContainer className={isPayment ? 'show' : ''}>
            <p>Pagamento - Valor a pagar {formataPreco(valorTotal)}</p>

            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                name="cardName"
                id="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
              <small>
                {checkInputHasError('cardName', form.errors.cardName)}
              </small>
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />
                <small>
                  {checkInputHasError('cardNumber', form.errors.cardNumber)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cvv">CVV</label>
                <InputMask
                  type="text"
                  name="cvv"
                  id="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cvv') ? 'error' : ''}
                  mask="999"
                />
                <small>{checkInputHasError('cvv', form.errors.cvv)}</small>
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                <InputMask
                  type="text"
                  name="mesDeVencimento"
                  id="mesDeVencimento"
                  value={form.values.mesDeVencimento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('mesDeVencimento') ? 'error' : ''
                  }
                  mask="99"
                />
                <small>
                  {checkInputHasError(
                    'mesDeVencimento',
                    form.errors.mesDeVencimento
                  )}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="anoDeVencimento">Ano de vencimento</label>
                <InputMask
                  type="text"
                  name="anoDeVencimento"
                  id="anoDeVencimento"
                  value={form.values.anoDeVencimento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('anoDeVencimento') ? 'error' : ''
                  }
                  mask="9999"
                />
                <small>
                  {checkInputHasError(
                    'anoDeVencimento',
                    form.errors.anoDeVencimento
                  )}
                </small>
              </InputGroup>
            </Row>
            <Botao
              className="margin-top"
              type="submit"
              onClick={() => {
                activeConfirmed()
              }}
            >
              Finalizar pagamento
            </Botao>
            <Botao onClick={backAdress}>Voltar para a edição de endereço</Botao>
          </PaymentContainer>
        </Form>
      )}
    </>
  )
}

export default Checkout
