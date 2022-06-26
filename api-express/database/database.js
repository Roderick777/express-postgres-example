const { Pool } = require('pg')

const db = new Pool({
  user: 'postgres',
  database: 'tu_database',
  password: 'postgres',
  port: 5432,
  host: 'localhost',
})

module.exports = { db }
