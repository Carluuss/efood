import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Item } from '../pages/Perfil'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getItem: builder.query<Item[], void>({
      query: () => 'restaurantes'
    }),
    getItemId: builder.query<Item[], number>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetItemQuery, useGetItemIdQuery } = api

export default api
