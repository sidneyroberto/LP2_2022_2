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

export const createTables = () => {
  console.log('Creating tables...')
  sqlPool.query(
    `
        create table if not exists "user" (
            "id" serial primary key,
            "name" varchar not null,
            "email" varchar not null
        )
    `,
    (err, _) => {
      if (err) {
        console.log('Error while trying to create table user')
        console.log(err)
      }
    }
  )

  sqlPool.query(
    `
        create table if not exists "post" (
            "id" serial primary key,
            "title" varchar not null,
            "content" varchar not null,
            "creationDate" date not null
        )
    `,
    (err, _) => {
      if (err) {
        console.log('Error while trying to create table post')
        console.log(err)
      }
    }
  )

  console.log('Process finished')
}

process.on('SIGINT', async () => {
  await sqlPool.end()
  console.log('Connection to db closed')
})
