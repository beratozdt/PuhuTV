import { GetServerSideProps } from 'next'
import { DigitalContent } from '../interfaces'
import { sampleContentData } from '../utils/sample-data'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import styled from 'styled-components'

type Props = {
  content?: DigitalContent,
  errors?: string,
  contentType?: string
  pageName?: string
}
const ContentName = styled.h1`
  color: white;
  min-height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`

export default function DynamicPage({ content, errors, contentType }: Props) {
  if (errors) {
    return (
      <Layout title="Sayfa Bulunamadı">
        <NotFound />
      </Layout>
    )
  }
  return (
    <Layout title={content?.name} themeName={contentType} pageName={content.name}>
      <ContentName>{content.name}</ContentName>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { slug } = context.query
  let tempContents:DigitalContent[] = [];
  let tempContentTypes:string[] = [];
  sampleContentData.data.container_items.forEach((contentItem) => {
    contentItem.items.forEach((contents) => {
      tempContentTypes.push(contentItem.display_name);
      tempContents.push(contents);
    });
  })
  const itemIndex = tempContents.findIndex((data) => data.meta.slug === (slug));
  const item:DigitalContent = tempContents[itemIndex];
  if(item){
    return {
      props: {
        content: item,
        contentType: tempContentTypes[itemIndex]
      },
    }
  }
  else {
    return { props: { errors: 'Sayfa Bulunamadı' } }
  }
}