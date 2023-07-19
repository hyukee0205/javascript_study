const express = require('express');

const PORT = 4000;

const Users = [
  {
    id: 0,
    name: '잭'
  },
  {
    id: 1,
    name: '제니퍼'
  }
]

const app = express();

app.get('/users', (req, res) => {
  res.send(Users);
})

app.get('/users/:userId', (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];

  if(user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});


app.get('/', (req, res) => {
  res.send('hello, world!')
})

app.listen(PORT, () => {
  console.log(`Running on port ${{PORT}}`)
})