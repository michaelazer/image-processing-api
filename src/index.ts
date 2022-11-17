import express from 'express'
const path = require('path')
import sharp from 'sharp'

const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
    const image: string = req.query.image as string
    const height: number = parseInt(req.query.height as string) as number
    const width: number = parseInt(req.query.width as string) as number
    const output: string = path.join(__dirname,'public','images','output.jpg')
    const processImage = async (image: string, width: number, height: number) => {
        const sharpie = await sharp(path.join(__dirname,'public','images',image))
            .resize(width, height)
            .toFile(output);
        return
    }
    processImage(image, width, height).then(() =>
        res.send("<h1>Before</h1><img src='/images/input.jpg'><br><h1>After</h1><img src='/images/output.jpg'>")
    )
})

app.listen(port, () => {
    console.log(`working on https://localhost:${port}`)
})
