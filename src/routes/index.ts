import express from 'express'
import images from './api/images'

const routes = express.Router()

routes.get('/', async (req, res) => {
    res.send(`
        
    `)
})

routes.use('/images', images)

export default routes;