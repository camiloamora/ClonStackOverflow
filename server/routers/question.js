import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: '¿Como reutilizo un componente en android',
  description:'Esta es mi pregunta',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user:{
    firstName: 'Camilo',
    lastName: 'Mora',
    email: 'kalufau@hotmail.com',
    password:'123456'
  }
}

const questions = new Array(10).fill(question)

// /api/questions
app.get('/', (req, res) =>
{
  setTimeout(() =>{
    res.status(200).json(questions)
  }, 2000)
})

// /api/questions/id
app.get('/:id', (req, res) => res.status(200).json(question))

export default app
