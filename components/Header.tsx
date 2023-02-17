import Link from 'next/link'
import Image from 'next/image'
import Logo from '../contents/logo.png'
import styled, {css} from 'styled-components'
import MqInit from 'styled-components-media-query'

const bp = {
  xxxs: 480,
  xxs: 480,
  xs: 480,
  s: 480,
  sl: 768,
  m: 768,
  ml: 768,
  l: 992,
  xl: 1024,
  xxl: 1320,
  xxxl: 1920,
  xxxxl: 1920,
  xxxxxl: 1920,
  xxxxxxl: 1920
};
const mq = MqInit({ bp })


type Props = {
  themeName?: string
  pageName?: string
}

const theme = {
  main: '#000000',
  dizi: '#FF0000',
  film: '#00B2FF',
  belgesel: '#FFC700'
};

const Background = styled.div`
  background: ${items => theme[items.theme]};
  padding: 25px 40px;
  max-width: 1920px;
  margin: 0 auto;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mq(null, 'l')(css`
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  `)}
`

const ContentName = styled.span`
  font-size: 1em;
  color: white;
  ${mq(null, 'l')(css`
    width: 100%;
    text-align: center;
    margin-top: 10px;
  `)}
`

const Header = ({ themeName, pageName = '' }: Props) => (
  <Background theme = {themeName}>
    <Navbar>
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={160}
          height={26}
          className='logo-image'
        />
      </Link>
      {pageName != '' ? <ContentName>{pageName}</ContentName> : <></>}
    </Navbar>
  </Background>
)

export default Header