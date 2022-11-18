import processImage from '../utilities/imageProcessing'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const imageName = "test"
const image: string = path.join(__dirname, '../', 'public', 'input', imageName + ".jpg")

const width: number = 500
const height: number = 500

const outputName = imageName + "-" + width + "x" + height
const output: string = path.join(__dirname, '../', 'public', 'output', outputName + ".jpg")

describe("testing Jasmine", () => {
    it("should show that Jasmine is working", () => {
        const a = 1
        expect(a).toBe(1)
    })
})

describe("Image processing working properly", async() => {

    it("should create a file", async () => {
        await processImage(image, width, height, output)
        expect(fs.existsSync(output)).toBe(true);
    });

    it("should change file width", async () => {
        const metadata = await sharp(output).metadata();
        expect(metadata.width).toBe(width)
    })

    it("should change file height", async () => {
        const metadata = await sharp(output).metadata();
        expect(metadata.height).toBe(height)
    })
}); 