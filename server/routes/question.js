import express from 'express'

const app = express.Router()

const question = {
  id: 1,
  title: 'Como utilizao un componente en Android',
  descripcion: 'Mien esta pregunta',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  user: {
    name: 'Luis',
    lastname: 'Castillo',
    email: 'luisyosemite@gmail.com',
    password: 'jimyluis'
  }
}

const questions = new Array(10).fill(question)

app.get('/', (req, res) => {
  res.status(200).json(questions)
})

app.get('/:id', (req, res) => {
  res.status(200).json(question)
})

export default app
