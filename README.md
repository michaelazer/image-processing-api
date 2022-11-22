
# Image Processing API

This project simply resizes an image to any dimensions given in the url.

## API Reference

#### Get all items

```http
  GET /api/images
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `string` | **Required**. Enter the image file name in the */input/* folder without file extension |
| `width` | `string` | **Required**. Enter the required image width |
| `height` | `string` | **Required**. Enter the required image height |




## Running Commands

#### Installing Dependencies

Before running the program, you should install npm libraries

```bash
  npm install
```

#### Running Tests

The test script runs both jasmine tests, then builds.

To run tests, run the following command

```bash
  npm run test
```


#### Running Builds

If you only wish to build without tests, run the following command

```bash
  npm run build
```

#### Running program

To run the program, run the following command

```bash
  npm run start
```
## Demo

Once the program is running you can enter your paramters in the url as follows:

```
http://localhost:3000/api/images?image=test&width=300&height=300
```

For testing purposes, there is a test image called "test" which you can use.

## Authors

- [@michaelazer](https://github.com/michaelazer)


## References

 - [Udacity Full-stack Nano-Degree](https://www.udacity.com/)
 - [My website](https://www.michaelazer.com)

