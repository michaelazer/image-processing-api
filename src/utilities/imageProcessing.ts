import sharp from 'sharp'

const processImage = async (
  image: string,
  width: number,
  height: number,
  output: string
): Promise<void> => {
  await sharp(image).resize(width, height).toFile(output)
}
export default processImage
