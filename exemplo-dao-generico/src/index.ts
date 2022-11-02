import { createTables } from './config/db'
import { GenericDAO } from './models/dao/GenericDAO'
import { User } from './models/entities/User'
import { Post } from './models/entities/Post'

const run = async () => {
  await createTables()

  const newUser = new User('Bob', 'bob@email.com')
  const dao1 = new GenericDAO(User)
  const savedUser = await dao1.save(newUser)
  console.log(savedUser)

  const newPost = new Post(
    'Tutorial TypeScript',
    'Este é o tutorial de TypeScript',
    new Date()
  )
  const dao2 = new GenericDAO(Post)
  const savedPost = await dao2.save(newPost)
  console.log(savedPost)
}

run()
