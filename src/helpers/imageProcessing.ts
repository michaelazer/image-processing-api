import sharp from 'sharp'

const processImage = async (image: string, width: number, height: number, output:string) => {
    const sharpie = await sharp(image)
        .resize(width, height)
        .toFile(output);
    return
}
export default processImage