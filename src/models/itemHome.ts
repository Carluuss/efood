class ItemHome {
  title: string
  description: string
  image: string
  infos: string[]
  assessment: number
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    infos: string[],
    assessment: number,
    id: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.assessment = assessment
    this.id = id
  }
}

export default ItemHome
