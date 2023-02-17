export type Meta = {
  slug: string
}

export type DigitalContent = {
  id: number,
  name: string,
  image: string,
  relaseYear: number,
  meta: Meta
}

export type DigitalContentType = {
  id: number,
  display_name: string,
  items: DigitalContent[],
  title_count: string,
  total_pages: number
}

export type RequestData = {
  data: {
    container_type: string,
    container_items: DigitalContentType[],
    total_pages: number,
    total_count: number,
    has_more: false
  }
}