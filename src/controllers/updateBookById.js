import { sendError, sendSuccess } from '../utils/response.js';
import books from '../data/books.js';

// бизнес-логика - изменение данных о книге по её id:
const updateBookById = (req, res) => {
  const { id } = req.params;
  const bookToUpdate = books.find((book) => book.id === id);

  if (!bookToUpdate) {
    sendError(res, 404, 'Code: 404. Книга не найдена.'); // 404 - Not Found
    return;
  }

  const bookProperties = [
    'title',
    'description',
    'authors',
    'favorite',
    'fileCover',
    'fileName',
  ];

  bookProperties.forEach((property) => {
    if (property in req.body) {
      bookToUpdate[property] = req.body[property];
    }
  });

  sendSuccess(res, 200, bookToUpdate); // 200 - Ok
};

export default updateBookById;
