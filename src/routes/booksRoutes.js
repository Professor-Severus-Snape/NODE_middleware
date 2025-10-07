import express from 'express';
import addNewBook from '../controllers/addNewBook.js'; // конечный обработчик
import deleteBookById from '../controllers/deleteBookById.js'; // конечный обработчик
import getAllBooks from '../controllers/getAllBooks.js'; // конечный обработчик
import getBookById from '../controllers/getBookById.js'; // конечный обработчик
import updateBookById from '../controllers/updateBookById.js'; // конечный обработчик

const router = express.Router();

// Middlewares уровня маршрутизации:
router.get('/', getAllBooks); // получение всего списка книг
router.get('/:id', getBookById); // получение книги по её id
router.post('/', addNewBook); // добавление новой книги в массив
router.put('/:id', updateBookById); // изменение данных о книге по её id
router.delete('/:id', deleteBookById); // удаление книги по её id

export default router;
