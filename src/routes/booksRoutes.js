import express from 'express';
import Book from '../classes/Book.js';
import books from '../data/books.js';

const router = express.Router();

// получение списка книг:
router.get('/', (_req, res) => res.json(books));

// получение книги по её id:
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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

export default router;
