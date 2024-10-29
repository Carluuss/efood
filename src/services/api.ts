import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Item } from '../pages/Perfil'

type Resposta = {
  orderId: string
}

type product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getItem: builder.query<Item[], void>({
      query: () => 'restaurantes'
    }),
    getItemId: builder.query<Item, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<Resposta, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetItemQuery, useGetItemIdQuery, usePurchaseMutation } = api

export default api
