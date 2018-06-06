import express from 'express'
import {
  required,
  questionsMiddleware,
  questionMiddleware
} from '../meddleware'

const app = express.Router()

app.get('/', questionsMiddleware, (req, res) => {
  setTimeout( () => {
    res.status(200).json(req.questions)
  }, 2000)
})

app.get('/:id', questionMiddleware, (req, res) => {
  setTimeout( () => {
    res.status(200).json(req.question)
  }, 2000)
})

app.post('/', required, questionsMiddleware, (req, res) => {
  const question = req.body
  question.id = +new Date()
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  req.questions.push(question)
  res.status(201).json(question)
})

app.post('/:id/respuestas', required, questionMiddleware, (req, res) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app
