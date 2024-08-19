import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/background.png'

import { HeaderBar, Titulo } from './style'

const HeaderHome = () => (
  <HeaderBar style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="container">
      <img src={logo} alt="Logo" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeaderBar>
)

export default HeaderHome
