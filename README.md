# NestJS + PostgreSQL (Docker) API

## Описание
Этот проект представляет собой REST API на NestJS с базой данных PostgreSQL, работающей в Docker.

## Запуск проекта

### Клонирование репозитория
```sh
git clone https://github.com/Hirexpie/testTaskOrderServise.git
cd testTaskOrderServise
```

### Создание файла окружения
Создайте файл `.env` в корне проекта и добавьте:
```env
PORT=3000
DB_HOST=nest_postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=12345678
DB_NAME=my_db
```

Если запускаете через `Docker`, оставьте `DB_HOST=nest_postgres`.  
Если локально — измените `DB_HOST=localhost`.

### Запуск через Docker
```sh
docker-compose up --build -d
```

## Полезные команды
```sh
docker-compose down                     # Остановить контейнеры
docker-compose down -v && docker-compose up --build -d  # Перезапуск с очисткой БД
docker-compose logs -f                   # Просмотр логов
```

---

## Запуск в режиме разработки
### Требования:
- Локальная база данных запущена на нужном порту.
- Существует пользователь с заданным паролем.
- Создана база данных.
### запусти следующие команды:
```
npm install
npm run build
npm run start
```
## API Endpoints

### Получить заказы
```http
GET /orders
```
#### Ответ:
```json
{
	"orders": [
		{
			"id": "70621943-558a-48a8-bb2c-1e3990b7ab67",
			"itemName": "Пицца",
			"address": "ул. Ленина 10",
			"status": "В обработке",
			"createdAt": "2025-03-24T17:37:02.914Z",
			"updatedAt": "2025-03-24T17:37:02.914Z"
		}
	],
	"total": 1,
	"page": 1,
	"limit": 100,
	"totalPages": 1
}
```

---

### Создать заказ
```http
POST /orders
```
#### Тело запроса:
```json
{
  "itemName": "Книга",
  "address": "ул. Пушкина 12",
  "status": "В обработке"
}
```
#### Ответ:
```json
{
	"message": "Заказ создан",
	"order": {
		"id": "8e4bf039-36c3-4c09-a126-31bf9b83ae4b",
		"itemName": "Книга",
		"address": "ул. Пушкина 12",
		"status": "В обработке",
		"createdAt": "2025-03-24T17:59:10.265Z",
		"updatedAt": "2025-03-24T17:59:10.265Z"
	}
}
```

---

### Получить заказ по ID
```http
GET /orders/:id
```
#### Ответ:
```json
{
	"order": {
		"id": "8e4bf039-36c3-4c09-a126-31bf9b83ae4b",
		"itemName": "Книга",
		"address": "ул. Пушкина 12",
		"status": "В обработке",
		"createdAt": "2025-03-24T17:59:10.265Z",
		"updatedAt": "2025-03-24T17:59:10.265Z"
	}
}
```
