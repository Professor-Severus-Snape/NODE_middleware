import express from 'express'; // подключение Express
// Node.js требует явно указывать расширение файла при использовании import в ES-модулях:
import Book from './src/classes/Book.js';
import User from './src/classes/User.js';
import data from './src/data/data.js';

// создание объекта приложения:
const app = express();

// чтобы получать данные в формате JSON:
app.use(express.json());

// создание нового пользователя:
app.post('/api/user/login', (req, res) => {
  const { users } = data;
  const { mail } = req.body;
  const user = users.find((user) => user.mail === mail);

  if (!user) {
    const newUser = new User(mail);
    users.push(newUser);

    res.status(201); // created
    res.json(newUser); // { id: 1, mail: 'test@mail.ru' }
  } else {
    res.status(404);
    res.json('Code: 404. Пользователь уже есть в системе.');
  }
});

// получение списка книг:
app.get('/api/books', (_, res) => {
  const { books } = data;
  res.json(books);
});

// получение книги по её id:
app.get('/api/books/:id', (req, res) => {
  const { books } = data;
  const { id } = req.params;
  const idx = books.findIndex((book) => book.id === id);

  if (idx !== -1) {
    res.json(books[idx]);
  } else {
    res.status(404);
    res.json('Code: 404. Книга не найдена.');
  }
});

// добавление новой книги в массив:
app.post('/api/books', (req, res) => {
  const { books } = data;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const newBook = new Book(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
  );

  books.push(newBook);

  res.status(201); // created
  res.json(newBook);
});

// изменение данных о книге по её id:
app.put('/api/books/:id', (req, res) => {
  const { books } = data;
  const { id } = req.params;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const idx = books.findIndex((book) => book.id === id);

  if (idx !== -1) {
    books[idx] = {
      id,
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    };

    res.json(books[idx]);
  } else {
    res.status(404);
    res.json('Code: 404. Книга не найдена.');
  }
});

// удаление книги по её id:
app.delete('/api/books/:id', (req, res) => {
  const { books } = data;
  const { id } = req.params;
  const idx = books.findIndex((book) => book.id === id);

  if (idx !== -1) {
    books.splice(idx, 1);
    res.json('ok');
  } else {
    res.status(404);
    res.json('Code: 404. Книга не найдена.');
  }
});

const PORT = process.env.PORT || 3000;

const startServer = async() => {
  try {
    app.listen(PORT, () =>
      console.log(`The server is running on http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error(error);
  }
};

startServer();
