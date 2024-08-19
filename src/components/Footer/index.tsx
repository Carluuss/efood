import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import backgroundImag from '../../assets/background.png'

import { ContainerLogos, FooterBar, Paragrafo } from './style'

const Footer = () => (
  <FooterBar style={{ backgroundImage: `url(${backgroundImag})` }}>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <ContainerLogos>
        <div>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </ContainerLogos>
      <Paragrafo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Paragrafo>
    </div>
  </FooterBar>
)

export default Footer
