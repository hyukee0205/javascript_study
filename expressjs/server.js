const express = require('express');

const PORT = 4000;

const users = [
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

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`${req.method} ${req.url} ${diffTime}ms`)
})



app.get('/users', (req, res) => {
  res.send(users);
})

app.post('/users', (req, res) => {
  if(!req.body.name) {
    return res.status(400).json({
      error: "Missing user name"
    })
  }

  const newUser = {
    name: req.body.name,
    id: users.length
  }
  users.push(newUser);
  res.json(newUser);
})


app.get('/users/:userId', (req, res) => {
  const userId = Number(req.params.userId);
  const user = users[userId];

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


