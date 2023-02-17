import * as React from 'react'
import ListItem from './ListItem'
import { DigitalContent } from '../interfaces'
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
  items: DigitalContent[],
  sortType: string
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 25px;
  width: 100%;
  max-width: 100%;
  ${mq(null, 'ml')(css`
    grid-template-columns: repeat(1,1fr);
    gap: 20px;
  `)}
  ${mq('ml', 'l')(css`
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
  `)}
`

export default function List ({ items, sortType='' }: Props) {
  if(sortType === 'desc') {
    items.sort(function(a:DigitalContent, b:DigitalContent) {
      return a.relaseYear - b.relaseYear;
    });
  }
  if(sortType === 'asc') {
    items.sort(function(a:DigitalContent, b:DigitalContent) {
      return a.relaseYear - b.relaseYear;
    });
    items.reverse();
  }

  return(
    <ListContainer>
      {
        items.map((item) => (
            <ListItem key={item.id} data={item} />
        ))
      }
    </ListContainer>
  )

}
