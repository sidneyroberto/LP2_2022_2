import * as dotenv from 'dotenv'
import { Pool } from 'pg'

// Primeiramente, carregue as variáveis de ambiente!
dotenv.config()

const sqlPool = new Pool({
  host: process.env.HOST,
  port: Number(process.env.PORT),
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
})

export const createTables = async () => {
  const client = await sqlPool.connect()

  try {
    await client.query('BEGIN')

    // Faz tudo que tem que ser feito
    await client.query(`
        create table if not exists "user" (
          "id" serial primary key,
          "name" varchar not null,
          "email" varchar not null
      )
    `)

    await client.query(`
        create table if not exists "post" (
          "id" serial primary key,
          "title" varchar not null,
          "content" varchar not null,
          "creationDate" date not null
      )      
    `)

    await client.query('COMMIT')
  } catch (err) {
    await client.query('ROLLBACK')
  }

  console.log('Feito')
  client.release()
}

export const executeQuery = async (query: string, values?: any[]) => {
  const result = values
    ? await sqlPool.query(query, values)
    : await sqlPool.query(query)

  return result
}

process.on('SIGINT', async () => {
  await sqlPool.end()
  console.log('Connection to db closed')
})
