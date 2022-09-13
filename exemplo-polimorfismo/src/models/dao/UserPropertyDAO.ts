import { appendFileSync, readFileSync } from 'fs'
import { join } from 'path'
import UserProperty from '../entities/UserProperty'

export default class UserPropertyDAO {
  private _userPropertyFilePath: string

  constructor() {
    this._userPropertyFilePath = join(
      __dirname,
      '..',
      '..',
      'data',
      'user.properties'
    )
  }

  set(userProperty: UserProperty) {
    const { key, value } = userProperty
    const newProperty = `${key}=${value}\n`

    appendFileSync(this._userPropertyFilePath, newProperty)
  }

  get(key: string): string | null {
    const content = readFileSync(this._userPropertyFilePath, 'utf-8')
    const lines = content.split('\n')
    let result: string | null = null
    for (let l of lines) {
      const aux = l.split('=')
      if (aux[0] == key) {
        result = aux[1]
        break
      }
    }

    return result
  }
}
