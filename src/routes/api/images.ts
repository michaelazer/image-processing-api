import express from 'express'
import fs from 'fs'
import path from 'path'
import validate from '../../middleware/validations'
import processImage from '../../utilities/imageProcessing'

const images = express.Router()

images.get('/', validate, (req: express.Request, res: express.Response): void => {
  try {
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
      res.sendFile(`${output}`)
    } else {
      processImage(image, width, height, output)
        .then(() => {
          res.sendFile(`${output}`)
        })
        .catch(() => {
          res.status(500).send('Something broke!')
        })
    }
  } catch (error) {
    res.status(500).send('Something broke!')
  }
})

export default images
