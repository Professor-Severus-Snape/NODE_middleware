import { sendError, sendSuccess } from '../utils/response.js';
import books from '../data/books.js';

// бизнес-логика - удаление книги по её id:
const deleteBookById = (req, res) => {
  const { id } = req.params;
  const idx = books.findIndex((book) => book.id === id);

  if (idx === -1) {
    sendError(res, 404, 'Code: 404. Книга не найдена.'); // 404 - Not Found
    return;
  }

  books.splice(idx, 1);
  sendSuccess(res, 200, 'Книга удалена'); // 200 - Ok
};

export default deleteBookById;
