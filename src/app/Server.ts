import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (request: Request, response: Response) => {
  response.status(200).send('Hello World');
});

app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });
