import { sendError, sendSuccess } from '../utils/response.js';
import books from '../data/books.js';

// бизнес-логика - получение книги по её id:
const getBookById = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);

  book
    ? sendSuccess(res, 200, book) // 200 - Ok
    : sendError(res, 404, 'Code: 404. Книга не найдена.'); // 404 - Not Found
};

export default getBookById;
