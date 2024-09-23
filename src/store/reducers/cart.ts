import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio, Item } from '../../pages/Perfil'

type CardState = {
  isOpen: boolean
  cardapio: Cardapio[]
}

const initialState: CardState = {
  cardapio: [],
  isOpen: false
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
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
