import { sendSuccess } from '../utils/response.js';
import Book from '../classes/Book.js';
import books from '../data/books.js';

// бизнес-логика - добавление новой книги в массив:
const addNewBook = (req, res) => {
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const newBook = new Book({
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
  });

  books.push(newBook);
  sendSuccess(res, 201, newBook); // 201 - Created
};

export default addNewBook;
