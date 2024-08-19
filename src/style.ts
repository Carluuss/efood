import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  branco: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }

  body {
    background-color: #FFF8F2;
  }
`
