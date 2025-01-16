const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { name: 'Ivan', email: 'ivan@example.com' },
  { name: 'Maria', email: 'maria@example.com' },
  { name: 'John', email: 'john@example.com' },
];

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Простой API для возврата информации о пользователях
app.get('/users', (req, res) => {
  res.json(users);
});

// Маршрут для добавления нового пользователя
app.post('/users/add', (req, res) => {
  const { name, email } = req.body;

  // Проверка наличия данных
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Добавление нового пользователя в массив
  const newUser   = { name, email };
  users.push(newUser  );

  // Ответ с добавленным пользователем
  res.status(201).json(newUser  );
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
