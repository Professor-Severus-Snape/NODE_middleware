import express from 'express';
import loginUser from '../controllers/loginUser.js'; // конечный обработчик (бизнес-логика)

const router = express.Router();

// Middleware уровня маршрутизации - авторизации пользователя:
router.post('/login', loginUser);

export default router;
