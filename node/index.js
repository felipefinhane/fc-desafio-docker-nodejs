const express = require('express')
const mysql = require('mysql')
const crypto = require("crypto");

const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const connection = mysql.createConnection(config)
connection.connect()

app.get('/', (req, res) => {
  let body = '<h1>Full Cycle Rocks!</h1>'


  let uuid = crypto.randomUUID();
  const nameToInsert = 'User-' + uuid

  const sqlInsert = `INSERT INTO people (name) VALUES ('${nameToInsert}')`
  connection.query(sqlInsert)

  const sqlSelect = `SELECT id, name FROM people`

  connection.query(sqlSelect, function (err, result) {
    if (err) {
      body += `<br><br><h3>Erro ao obter dados do banco de dados: ${err}</h3>`
      res.send(body)
      return
    }

    body += '<ul>'
    result.forEach(row => {
      body += `<li>${row.id} - ${row.name}</li>`
    })
    body += '</ul>'

    res.send(body)
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
