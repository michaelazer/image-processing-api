import processImage from '../utilities/imageProcessing'
import supertest from 'supertest'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import app from '../index'

const imageName = 'test'
const image: string = path.join(
  __dirname,
  '../',
  'public',
  'input',
  imageName + '.jpg'
)

const width: number = 500
const height: number = 500

const outputName: string = imageName + '-' + width.toString() + 'x' + height.toString()
const output: string = path.join(
  __dirname,
  '../',
  'public',
  'output',
  outputName + '.jpg'
)

const request = supertest(app)
// describe('Test endpoint responses', () => {
//   it('gets the api endpoint', async (done) => {
//     const response = await request.get('/')
//     expect(response.status).toBe(200)
//     done()
//   })
// })

describe('testing Jasmine', () => {
  it('should show that Jasmine is working', () => {
    const a = 1
    expect(a).toBe(1)
  })
})

describe('Image processing working properly', async (): Promise<void> => {
  it('should create a file', async () => {
    await processImage(image, width, height, output)
    expect(fs.existsSync(output)).toBe(true)
  })

  it('should change file width', async () => {
    const metadata = await sharp(output).metadata()
    expect(metadata.width).toBe(width)
  })

  it('should change file height', async () => {
    const metadata = await sharp(output).metadata()
    expect(metadata.height).toBe(height)
  })
})
