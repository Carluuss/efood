import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './style'
import Rotas from './routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
