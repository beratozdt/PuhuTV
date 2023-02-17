import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .return-home-button {
    width: auto;
    float: left;
    color: black;
    padding: 10px 20px;
    background: white;
    border-radius: 6px;
  }
`
const NotFountTitle = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  padding: 0 40px;
`
const NotFoundBox = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundBox>
      <NotFountTitle>Aradığınız Sayfa Bulunamadı</NotFountTitle>
      <Link className='return-home-button' href="/">Ana Sayfaya Dön</Link>
    </NotFoundBox>
  </NotFoundWrapper>
)

export default NotFound
