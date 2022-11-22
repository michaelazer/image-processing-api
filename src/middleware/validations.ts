import express from 'express'

const validate = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  const { image, width, height } = req.query
  const w: number = parseInt(width as string)
  const h: number = parseInt(height as string)

  if (image === undefined || image === '') {
    res.send('Please pick file name')
  } else if (h === undefined || Number.isNaN(h)) {
    res.send('Please enter height (numerical value)')
  } else if (h === undefined || Number.isNaN(w)) {
    res.send('Please enter width (numerical value)')
  } else {
    next()
  }
}

export default validate
