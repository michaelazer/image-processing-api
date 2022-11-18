import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('main route')
})

app.listen(port, () => {
  console.log(`working on https://localhost:${port}`)
})

export default app
