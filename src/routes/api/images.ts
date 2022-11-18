import express from 'express'
import fs from 'fs'
import path from 'path'
import processImage from '../../helpers/imageProcessing'

const images = express.Router()

images.get('/', async (req, res) => {
    const imageName = req.query.image as string
    const image: string = path.join(__dirname, '../', '../', 'public', 'input', imageName + ".jpg")

    const width: number = parseInt(req.query.width as string) as number
    const height: number = parseInt(req.query.height as string) as number

    const outputName = imageName + "-" + width + "x" + height
    const output: string = path.join(__dirname, '../', '../', 'public', 'output', outputName + ".jpg")

    if (fs.existsSync(output)) {
        console.log('From cache')
    } else {
        console.log('Running process')
        await processImage(image, width, height, output)
    }
    
    res.send(
        `
            <h1>${imageName}</h1><br> \
            <h2>${width}x${height}</h2><br> \
            <img src="../output/${outputName}.jpg" alt="Output image"> \
            `
    )
})

export default images;