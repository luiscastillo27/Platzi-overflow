import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 2715
const debug = new Debug('PlatziOverflow:root')

app.listen(PORT, () => {
  debug(`El servidor esta corriendo en el puerto ${PORT}`)
})
