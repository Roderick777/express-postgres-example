const { Pool } = require('pg')

const db = new Pool({
  user: 'postgres',
  database: 'votacion',
  password: 'postgres',
  port: 5432,
  host: 'localhost',
})

module.exports = { db }
