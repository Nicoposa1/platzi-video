import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(3000, (err) => {
  if (err) console.log(error);
  else console.log('Server Running on port 3000');
});
