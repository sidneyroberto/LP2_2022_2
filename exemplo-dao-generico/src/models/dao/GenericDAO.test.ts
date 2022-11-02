import { createTables, executeQuery } from '../../config/db'
import { User } from '../entities/User'
import { GenericDAO } from './GenericDAO'

describe('Tests over GenericDAO', () => {
  beforeAll(async () => await createTables())

  beforeEach(async () => {
    await executeQuery('delete from "user"')
    await executeQuery('delete from "post"')
  })

  it('should return all previously saved tuples', async () => {
    let user = new User('Bob', 'bob@email')
    const dao = new GenericDAO(User)
    await dao.save(user)
    user = new User('Carl', 'carl@email.com')
    await dao.save(user)
    user = new User('Mary', 'mary@email.com')
    await dao.save(user)

    const users = await dao.findAll()
    expect(users.length).toBe(3)
  })
})
