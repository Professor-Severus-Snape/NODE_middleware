// Middleware для обработки ошибок:
export default function error500(err, _req, res, _next) {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || 'Внутренняя ошибка сервера';

  res.status(status);
  res.json({ error: message });
  // метод next() вызывать не нужно, потому что запрос уже закрыт - res.json()
}

// NOTE: сработает при:
// function someDangerousFunction(_req, _res, next) {
//   try {
//     throw new Error('Что-то пошло не так...'); // 1. без catch сработает middleware 'error500'
//   } catch (err) {
//     next(err); // 2. 'ручная' передача ошибки в middleware 'error500'
//   }
// }
