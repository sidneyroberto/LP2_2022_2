import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import UserProperty from '../entities/UserProperty'
import UserPropertyDAO from './UserPropertyDAO'

const path = join(__dirname, '..', '..', 'data', 'user.properties')

describe('Tests over new property insertion', () => {
  beforeEach(() => {
    writeFileSync(path, '')
  })

  test('It should contain the new property after add it to the properties file', () => {
    const userProperty: UserProperty = {
      key: 'email',
      value: 'sid@email.com',
    }

    const userPropertyDAO = new UserPropertyDAO()
    userPropertyDAO.add(userProperty)

    const content = readFileSync(path, 'utf-8')
    expect(content).toBe('email=sid@email.com\n')
  })

  test('It should contain all the new properties after add them to the properties file', () => {
    let userProperties: UserProperty[] = [
      {
        key: 'name',
        value: 'Sidney',
      },
      {
        key: 'email',
        value: 'sid@email.com',
      },
      {
        key: 'cpf',
        value: '99999999999',
      },
      {
        key: 'age',
        value: 18,
      },
    ]

    const userPropertyDAO = new UserPropertyDAO()
    userProperties.forEach((up) => userPropertyDAO.add(up))

    const content = readFileSync(path, 'utf-8')
    const expectedContent =
      'name=Sidney\nemail=sid@email.com\ncpf=99999999999\nage=18\n'
    expect(content).toBe(expectedContent)
  })
})

describe('Tests over querying properties', () => {
  beforeEach(() => {
    writeFileSync(path, '')
  })

  test('It should return null when key is not found', () => {
    const userPropertyDAO = new UserPropertyDAO()
    expect(userPropertyDAO.get('name')).toBe(null)
  })

  test('It should return correct value when key is found', () => {
    const userPropertyDAO = new UserPropertyDAO()
    const userProperty: UserProperty = {
      key: 'name',
      value: 'Sidney Sousa',
    }
    userPropertyDAO.add(userProperty)

    expect(userPropertyDAO.get('name')).toBe('Sidney Sousa')
  })
})
