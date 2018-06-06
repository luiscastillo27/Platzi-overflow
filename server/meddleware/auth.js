import Debug from 'debug'
import { secret } from '../config'
import jwt from 'jsonwebtoken'

const debug = new Debug('platzi-overflow:auth-meddleware')

export const users = [{
    name: 'Luis',
    lastname: 'Castillo',
    email: 'luis@gmail.com',
    password: 'jimyluis',
    id: 127
}]

export const findUserByEmail = e => users.find(({ email }) => email === e)

export const required = ( req, resp, next ) => {
  jwt.verify(req.query.token, secret, (error, token) => {

    if (error) {
        debug('JWT was not encryped with our secret')
        return resp.status(401).json({
            message: 'Unauthorized',
            error: error
        })
    } else {
        debug(`Token verified ${token}`)
        req.user = token.user
        next()
    }

  })
}
