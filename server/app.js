import express from 'express'
import bodyParser from 'body-parser'
import {question, auth} from './routers'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === 'development')
{
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

// app.get('/', (req, res) =>
//   res.send('Hola desde express')
// )

app.use('/api/questions', question)
app.use('/api/auth', auth)

export default app
