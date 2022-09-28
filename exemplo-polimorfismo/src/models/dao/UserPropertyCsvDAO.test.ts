import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

import UserProperty from '../entities/UserProperty'
import UserPropertyCsvDAO from './UserPropertyCsvDAO'

const path = join(__dirname, '..', '..', 'data', 'user.csv')

describe('Tests over new property insertion', () => {
  beforeEach(() => writeFileSync(path, ''))

  it('should contain the new property after add it to the properties file', () => {
    const userProperty: UserProperty = {
      key: 'email',
      value: 'sidney.sousa@email.com',
    }

    const userPropertyDAO = new UserPropertyCsvDAO()
    userPropertyDAO.set(userProperty)

    const content = readFileSync(path, 'utf-8')
    const expectedContent = 'key,value\nemail,sidney.sousa@email.com\n'
    expect(content).toBe(expectedContent)
  })

  it('should contain all the new properties after add them to the properties file', () => {
    const userProperties: UserProperty[] = [
      {
        key: 'name',
        value: 'Tatiane',
      },
      {
        key: 'email',
        value: 'tati@email.com',
      },
      {
        key: 'cpf',
        value: '999.999.999-99',
      },
    ]

    const userPropertyDAO = new UserPropertyCsvDAO()
    userProperties.forEach((up) => userPropertyDAO.set(up))

    const content = readFileSync(path, 'utf-8')
    const expectedContent =
      'key,value\nname,Tatiane\nemail,tati@email.com\ncpf,999.999.999-99\n'

    expect(content).toBe(expectedContent)
  })
})

describe('Tests over property querying', () => {
  beforeEach(() => writeFileSync(path, ''))

  it('should retrieve a previously inserted property', () => {
    const userProperty: UserProperty = {
      key: 'name',
      value: 'Tatiane',
    }

    const userPropertyDAO = new UserPropertyCsvDAO()
    userPropertyDAO.set(userProperty)

    const value = userPropertyDAO.get('name')
    expect(value).toBe(userProperty.value)
  })

  it('should correctly update a property value', () => {
    const userProperty: UserProperty = {
      key: 'name',
      value: 'Tatiane',
    }

    const userPropertyDAO = new UserPropertyCsvDAO()
    userPropertyDAO.set(userProperty)

    userProperty.value = 'Clara'
    userPropertyDAO.set(userProperty)
    userProperty.value = 'Patrícia'
    userPropertyDAO.set(userProperty)

    const value = userPropertyDAO.get('name')
    expect(value).toBe(userProperty.value)
  })

  it('should correctly load properties file content', () => {
    const content = 'key,value\nname,Tatiane\nemail,tati@email.com\nid,37\n'
    writeFileSync(path, content)

    const userPropertyDAO = new UserPropertyCsvDAO()
    let value = userPropertyDAO.get('name')
    expect(value).toBe('Tatiane')
    value = userPropertyDAO.get('email')
    expect(value).toBe('tati@email.com')
    value = userPropertyDAO.get('id')
    expect(value).toBe('37')
  })

  it('should return null when property does not exist', () => {
    const userPropertyDAO = new UserPropertyCsvDAO()
    const value = userPropertyDAO.get('name')
    expect(value).toBe(null)
  })
})
