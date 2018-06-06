import express from 'express'
import {
  required,
  questionsMiddleware,
  questionMiddleware
} from '../meddleware'

const app = express.Router()

app.get('/', questionsMiddleware, (req, res) => {
  //setTimeout( () => {
    res.status(200).json(req.questions)
  //}, 2000)
})

app.get('/:id', questionMiddleware, (req, res) => {
  //setTimeout( () => {
    res.status(200).json(req.question)
  //}, 2000)
})

app.post('/', required, questionsMiddleware, (req, res) => {
  //setTimeout( () => {
    const q = req.body
    q.id = +new Date()
    q.createdAt = new Date()
    q.answers = []
    req.questions.push(q)
    res.status(201).json(q)
  //}, 2000)
})

app.post('/:id/respuestas', required, questionMiddleware, (req, res) => {
  //setTimeout( () => {
    const answer = req.body
    const q = req.question
    answer.createdAt = new Date()
    answer.user = req.user
    q.answers.push(answer)
    res.status(201).json(answer)
  //}, 2000)
})

export default app
