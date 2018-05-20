import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'

const app = express.Router()
const debug = new Debug('PlatziOverflow:root')
const secret = 'miclavesjim'
const users = {
  id: 2715,
  name: 'Luis',
  lastname: 'Castillo',
  email: 'luiscastillo@iwebsapp.com',
  password: 'jimyluis'
}

function findUserByEmail( email ){
  return users.find(user => user.email == email)
}

function comparePasswords(providedPassword, userPassword){
  return  providedPassword === userPassword
}

function handelLoginFailed( res ){
  return res.status(401).json({
    message: 'Login failed',
    error: 'Email and password dont match'
  })
}

app.post('/login', (req, res, next) => {
  const { email, password } = req.body
  const user = findUserByEmail( email )
  if(!user){
    debug(`User with email ${email} not found`)
    return handelLoginFailed(res)
  }
  if (!comparePasswords(password, user.password)){
      debug(`Password do not match: ${password} !== ${user.password}`)
      return handelLoginFailed(res)
  }

  const token = jwt.sign({user}, secret, { expiresIn: 86400 })
  res.status(200).json({
    message: 'Login succeded',
    token,
    userId: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email
  })
})

export default app
