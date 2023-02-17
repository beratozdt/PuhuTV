import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

import { DigitalContent } from '../interfaces'

type Props = {
  data: DigitalContent
}

const ContentName = styled.span`
  width: 100%;
  text-decoration: none;
  color: white;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4654236694677871) 19%, rgba(0,0,0,1) 100%);
  font-size: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 50px 0;
`
const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`

const ListItem = ({ data }: Props) => (
  <Link href="/[id]" as={`/${data.meta.slug}`} className=''>
    <ItemWrapper>
      <img
        className='img'
        src={data.image}
        alt={data.name}
        width={60}
        height={100}
      />
      <ContentName>{data.name}</ContentName>
    </ItemWrapper>
  </Link>
)

export default ListItem
