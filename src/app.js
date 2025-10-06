import express from 'express'; // подключение Express
import apiRoutes from './routes/index.js'; // подключение роутов
import error404 from './middleware/error404.js'; // маршрут не найден
import error500 from './middleware/error500.js'; // ошибка сервера

// Создание объекта приложения:
const app = express();

// Middlewares уровня приложения (посл-сть: парсеры -> роуты -> маршрут не найден -> выброс ошибки):

// 1. Middleware - JSON парсер (заголовок Content-Type: application/json):
app.use(express.json());

// 2. Middleware для формы (заголовок Content-Type: application/x-www-form-urlencoded):
app.use(express.urlencoded({ extended: true }));

// 3. Middleware - основные маршруты:
app.use('/api', apiRoutes); // http://localhost:${PORT}/api

// 4. Middleware - обработка 404 (не сработал ни один маршрут -> http://localhost:3000/api/unknown):
app.use(error404);

// 5. Middleware - обработка 500 (выброшена ошибка -> throw new Error('Сервер упал') | next(err)):
app.use(error500);

export default app;
