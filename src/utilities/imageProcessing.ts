import sharp from 'sharp'

const processImage = async (
  image: string,
  width: number,
  height: number,
  output: string
): Promise<sharp.OutputInfo> => {
  const sharpOutput: sharp.OutputInfo = await sharp(image).resize(width, height).toFile(output)
  return sharpOutput
}
export default processImage
