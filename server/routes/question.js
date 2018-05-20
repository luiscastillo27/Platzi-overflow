import express from 'express'

const app = express.Router()

const currentUser = {
  name: 'Luis',
  lastname: 'Castillo',
  email: 'luiscastillo@iwebsapp.com',
  password: 'jimyluis'
}

function questionMeddleware(req,resp,next){
  const id = req.params.id
  req.question =  questions.find( question => question.id === +id)
  next()
}

function userMeddleware(req,resp,next){
  req.user = currentUser
  next()
}

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

app.get('/:id', questionMeddleware, (req, res) => {
  setTimeout( () => {
    res.status(200).json(req.question)
  }, 2000)
})

app.post('/', userMeddleware, (req, res) => {
  const question = req.body
  question.id = +new Date()
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(201).json(question)
})

export default app
