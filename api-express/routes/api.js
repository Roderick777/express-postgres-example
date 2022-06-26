const express = require('express')
const router = express.Router()
const { db } = require('../database/database')

router.get('/', async (req, res, next) => {
  const response = await db.query('SELECT * FROM users')
  res.json({ msg: response.rows })
})

router.get('/ejemplo', async (req, res, next) => {
  res.json({ msg: 'ejemplo' })
})

module.exports = router
