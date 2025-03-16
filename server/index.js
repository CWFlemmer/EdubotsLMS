const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const port = 3000
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use('/users', usersRouter)
app.use('/auth', authRouter)

// setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'claire@123',
    database: 'EdubotsLMS-01'
})

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})