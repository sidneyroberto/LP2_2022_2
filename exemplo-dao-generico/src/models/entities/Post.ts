import { Entity } from './Entity'

export class Post extends Entity {
  id?: number
  title: string
  content: string
  creationDate: Date

  constructor(title: string, content: string, creationDate: Date) {
    super()
    this.title = title
    this.content = content
    this.creationDate = creationDate
  }
}
