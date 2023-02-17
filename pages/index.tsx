import Image from 'next/image'
import Layout from '../components/Layout'
import Banner from '../contents/main_banner.png'
import styled from 'styled-components'
import List from '../components/List'
import { sampleContentData } from '../utils/sample-data' 
import { DigitalContent } from '../interfaces'
import React, { useEffect, useState } from 'react'

const BannerWrapper = styled.div`
  width:100%;
  display:flex;
  max-width: 1920px;
  margin: 0 auto;
`
const Container = styled.div`
  padding: 0 40px;
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Subtitle = styled.h2`
  text-transform: capitalize;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  button {
    appearence : none;
    border: none;
    box-shadow: none;
    background: black;
    color: white;
    padding: 15px 30px;
    border-radius: 6px;
    cursor: pointer;
  }
  .sort-old {
    margin-left: 30px;
  }
`;

export default function IndexPage() {
  const [contentTypes, setContentTypes] = useState([]);
  const [contentTypesDetail, setContentTypesDetail] = useState([]);
  const [contents, setContents] = useState([]);
  const [sortType, setSortType] = useState('');
  
  const getData = () => {
    const tempContents:DigitalContent[] = [];
    const tempContentTypes:string[] = [];
    const tempContentTypesDetail:string[] = [];
    sampleContentData.data.container_items.forEach((contentItem) => {
      contentItem.items.forEach((contents) => {
        tempContents.push(contents);
        tempContentTypesDetail.push(contentItem.display_name);
      });
      tempContentTypes.push(contentItem.display_name);
    });
    setContentTypes(tempContentTypes);
    setContents(tempContents);
    setContentTypesDetail(tempContentTypesDetail);
  }

  useEffect(()=> {
    getData();
  },[]);

  const sortNew = () => {
    setSortType('asc')
  }

  const sortOld = () => {
    setSortType('desc')
  }

  return(
    <Layout title="Puhu TV" themeName='main'>
      <BannerWrapper>
        <Image
          priority={true}
          className='img'
          src={Banner}
          alt="Banner"
        />
      </BannerWrapper>
      <Container>
        <ButtonWrapper>
            <button className='sort-new' onClick={sortNew}>Sırala (Yeni)</button>
            <button className='sort-old' onClick={sortOld}>Sırala (Eski)</button>
        </ButtonWrapper>
      </Container>
      {contentTypes.map((typeItem) => (
        <>
          <Container>
            <Subtitle>{typeItem}</Subtitle>
            <List sortType={sortType} items={contents.filter((contentItem, index) => contentTypesDetail[index] === typeItem)}></List>
          </Container>
        </>
      ))}
      
    </Layout>
  )

}
