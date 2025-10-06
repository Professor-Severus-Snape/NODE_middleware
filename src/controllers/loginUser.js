import { sendError, sendSuccess } from '../utils/response.js';
import users from '../data/users.js';

// бизнес-логика - авторизация пользователя:
const loginUser = (req, res) => {
  const { mail } = req.body;

  if (!mail) {
    sendError(res, 400, 'Поле "mail" обязательно'); // 400 - Bad Request (некорректные данные)
    return;
  }

  const user = users.find((user) => user.mail === mail);

  if (!user) {
    sendError(res, 404, 'Пользователь с таким email не найден'); // 404 - Not Found
    return;
  }

  sendSuccess(res, 201, user); // 201 - Created - { success: true, data: { id: 1, mail: '...' } }
};

export default loginUser;
