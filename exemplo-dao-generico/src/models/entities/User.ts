import { Entity } from './Entity'

export class User extends Entity {
  id?: number
  name: string
  email: string

  constructor(name: string, email: string) {
    super()
    this.name = name
    this.email = email
  }
}
