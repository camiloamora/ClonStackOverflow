import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: 'Hola ¿Como reutilizo un componente en android',
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

// GET /api/questions
app.get('/', (req, res) =>
{
  setTimeout(() =>{
    res.status(200).json(questions)
  }, 2000)
})

// GET /api/questions/id
app.get('/:id', (req, res) => {
  console.log('entro por id')
  const { id } = req.params
  const q = questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

// POST /api/question
app.post('/', (req,res) =>{
  const question = req.body
  question._id = +new Date()
  question.user =   {
    email: 'kalufau@hotmail.com',
    password: '123456',
    firstName: 'Camilo',
    lastName: 'Mora'
  }
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

export default app
