import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/background.png'

import { HeaderBar, Titulo } from './style'
import { Link } from 'react-router-dom'

const HeaderHome = () => (
  <HeaderBar style={{ backgroundImage: `url(${backgroundImg})` }}>
    <div className="container">
      <Link to={'/'}>
        <img src={logo} alt="Logo" />
      </Link>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeaderBar>
)

export default HeaderHome
