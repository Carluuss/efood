import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio, Item } from '../../pages/Perfil'

type CardState = {
  items: Item[]
  cardapio: Cardapio[]
  isOpen: boolean
  isConfirmed: boolean
  isCart: boolean
  isAddress: boolean
  isPayment: boolean
}

const initialState: CardState = {
  items: [],
  cardapio: [],
  isOpen: false,
  isAddress: false,
  isCart: true,
  isConfirmed: false,
  isPayment: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const cardapio = state.cardapio.find(
        (item) => item.id === action.payload.id
      )

      if (!cardapio) {
        state.cardapio.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cardapio = state.cardapio.filter(
        (item) => item.id !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    startCheckout: (state) => {
      state.isCart = false
      state.isConfirmed = false
      state.isAddress = true
      state.isPayment = false
    },
    closeAndFinish: (state) => {
      state.isOpen = false
      state.isCart = true
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = false
      state.cardapio = []
    },
    payment: (state) => {
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = true
      state.isCart = false
    },
    confirmed: (state) => {
      state.isConfirmed = true
      state.isAddress = false
      state.isPayment = false
      state.isCart = false
    },
    backtoCart: (state) => {
      state.isAddress = false
      state.isPayment = false
      state.isConfirmed = false
      state.isCart = true
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  startCheckout,
  backtoCart,
  closeAndFinish,
  confirmed,
  payment
} = cartSlice.actions
export default cartSlice.reducer
