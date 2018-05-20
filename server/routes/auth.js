import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

const secret = 'miclavesjim'

const users = [{
    name: 'luis',
    lastname: 'castillo',
    email: 'luis@gmail.com',
    password: 'jimyluis',
    id: 123
}]

const findUserByEmail = e => users.find(({ email }) => email === e)

function comparePasswords(providedPassword, userPassword) {
  return providedPassword === userPassword
}

app.post('/signin', (req, res, next) => {
  const { email, password } = req.body
  const user = findUserByEmail(email)

  if (!user) {
    debug(`User with email ${email} not found`)
    return handleLoginFailed(res)
  }

  if (!comparePasswords(password, user.password)) {
    debug(`Passwords do not match: ${password} !== ${user.password}`)
    return handleLoginFailed(res, 'El correo y la contraseña no coinciden')
  }

  const token = createToken(user)
  res.status(200).json({
    message: 'Login succeded',
    token,
    userId: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email
  })
})

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })

app.post('/signup', (req, res) => {
  const { name, lastname, email, password } = req.body
  const user = {
    id: +new Date(),
    name,
    lastname,
    email,
    password
  }
  debug(`Creating new user: ${user}`)
  users.push(user)
  const token = createToken(user)
  res.status(201).json({
    message: 'User saved',
    token,
    userId: user.id,
    name,
    lastname,
    email
  })
})

function handleLoginFailed(res, message) {
  return res.status(401).json({
    message: 'Login failed',
    error: message || 'Email and password don\'t match'
  })
}

export default app
