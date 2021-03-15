import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
}

app.get('*', (req, res) => {
  console.log('Hola');
  res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
  if (err) console.log(error);
  else console.log('Server Running on port 3000');
});
