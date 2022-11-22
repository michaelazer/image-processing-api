import express from 'express'
import fs from 'fs'
import path from 'path'
import processImage from '../../utilities/imageProcessing'

const images = express.Router()

images.get('/', async (req: express.Request, res: express.Response) => {
  const imageName: string = req.query.image as string
  const image: string = path.join(
    __dirname,
    '../',
    '../',
    'public',
    'input',
    imageName + '.jpg'
  )

  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)

  const outputName = imageName + '-' + width.toString() + 'x' + height.toString()
  const output: string = path.join(
    __dirname,
    '../',
    '../',
    'public',
    'output',
    outputName + '.jpg'
  )

  if (fs.existsSync(output)) {
    console.log('From cache')
  } else {
    console.log('Running process')
    await processImage(image, width, height, output)
  }
  console.log(output)
  res.sendFile(`${output}`)
})

export default images
