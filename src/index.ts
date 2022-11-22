import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', routes)

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('main route')
})

app.listen(port, (): void => {
  console.log(`working on https://localhost:${port}`)
})

export default app
