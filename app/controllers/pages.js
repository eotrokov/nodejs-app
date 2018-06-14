const { Client } = require('pg')
exports.home = async function (req, res) {
  const client = new Client({ user: 'postgres', host: '192.168.1.75', database: 'License', password: '*', port: 5432 })
  await client.connect()
  const res1 = await client.query(`select * from \"Users\" where \"Token\" = \'${req.param('token')}\'`)
  res.send(res1.rows[0]) // Hello world!
  await client.end()
}