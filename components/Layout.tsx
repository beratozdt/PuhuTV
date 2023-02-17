import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

type Props = {
  children?: ReactNode
  title?: string
  themeName?: string
  pageName?: string
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
  }
  .img {
    width:100%;
    height:auto;
    object-fit:contain;
  }
  a {
    text-decoration: none;
  }
`;

const CenterLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #262323;
  padding-bottom: 40px;
`;


const Layout = ({ children, title = 'Puhu TV', themeName='main', pageName='' }: Props) => (
  <div>
    <GlobalStyle></GlobalStyle>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <CenterLayout>
      <Header themeName={themeName} pageName={pageName}></Header>
      {children}
    </CenterLayout>
  </div>
)

export default Layout