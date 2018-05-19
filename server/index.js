import http from 'http'
import Debug from 'debug'

const PORT = 2715
const debug = new Debug('PlatziOverflow:root')

const app = http.createServer((req, res) =>{
  debug('nueva peticion')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hola desde el api')
  res.end()
})

app.listen(PORT, () => {
  debug(`El servidor esta corriendo en el puerto ${PORT}`)
})
