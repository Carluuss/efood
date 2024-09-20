import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './style'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <GlobalStyle />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
