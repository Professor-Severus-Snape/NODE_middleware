// Middleware для обработки ошибки 404 (искусственный вызов ошибки):
export default function error404(_req, res) {
  res.status(404);
  res.json({ error: 'Маршрут не найден' });
  // метод next() вызывать не нужно, потому что запрос уже закрыт - res.json()
}
