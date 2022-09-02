import pg from  'pg'

const { Client } = pg

const client = new Client({
  host: 'db',
  user: 'db',
  password: 'db',
  database: 'db',
  port: 5432,
})

client.connect()

const getUsers = async () => {
  const res = await client.query('select * from users')

  return res.rows.map(({ id, login }) => {
    return {
      id,
      login,
    };
  })
}

const getRooms = async () => {
  const res = await client.query('select * from rooms')

  return res.rows.map(({ id, title }) => {
    return {
      id,
      title,
    };
  })
}

export default {getUsers, getRooms}
