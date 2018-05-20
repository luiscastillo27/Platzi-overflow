import express from 'express'

const app = express.Router()

const question = {
  id: 1,
  title: '¿Cómo reutilizo un componente en Android?',
  description: 'Miren esta es mi pregunta...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    name: 'Luis',
    lastname: 'Castillo',
    email: 'luiscastillo@iwebsapp.com',
    password: 'jimyluis'
  }
}

const questions = new Array(10).fill(question)

app.get('/', (req, res) => {
  setTimeout( () => {
    res.status(200).json(questions)
  }, 2000)
})

app.get('/:id', (req, res) => {
  setTimeout( () => {
    const id = req.params.id
    const q = questions.find( question => question.id === +id)
    res.status(200).json(question)
  }, 2000)
})

app.post('/', (req, res) => {
  const question = req.body
  question.id = +new Date()
  question.user = {
    email: 'luis@gmail.com',
    password: 'jimyluis',
    name: 'Luis',
    lastname: 'Castillo'
  }
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

export default app
