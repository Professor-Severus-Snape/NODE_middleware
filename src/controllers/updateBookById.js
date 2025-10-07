import { sendError, sendSuccess } from '../utils/response.js';
import books from '../data/books.js';

// бизнес-логика - изменение данных о книге по её id:
const updateBookById = (req, res) => {
  const { id } = req.params;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const idx = books.findIndex((book) => book.id === id);

  if (idx === -1) {
    sendError(res, 404, 'Code: 404. Книга не найдена.'); // 404 - Not Found
    return;
  }

  books[idx] = {
    id,
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
  };

  sendSuccess(res, 200, books[idx]); // 200 - Ok
};

export default updateBookById;
