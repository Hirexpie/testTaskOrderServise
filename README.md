# NestJS + PostgreSQL (Docker) API

## Описание
Этот проект представляет собой REST API на NestJS с базой данных PostgreSQL, работающей в Docker.

## Запуск проекта

### Клонирование репозитория
```sh
git clone <URL-РЕПОЗИТОРИЯ>
cd <ИМЯ-ПРОЕКТА>
```

### Создание файла окружения
Создай файл `.env` в корне проекта и добавь:
```env
PORT=3000
DB_HOST=nest_postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=12345678
DB_NAME=my_db
```

желательно ```DB_HOST``` остваить как ```nest_postgres```
### Запуск через Docker
```sh
docker-compose up --build -d
```
## Полезные команды
Остановить контейнеры:
```sh
docker-compose down
```

Перезапустить с очисткой БД:
```sh
docker-compose down -v && docker-compose up --build -d
```

Просмотр логов:
```sh
docker-compose logs -f
```

## 




## API Endpoints
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/orders` | Получить заказы |
### ответ:
```
{
	"orders": [
		{
			"id": "70621943-558a-48a8-bb2c-1e3990b7ab67",
			"itemName": "Пицца",
			"address": "ул. Ленина 10",
			"status": "В обработке",
			"createdAt": "2025-03-24T17:37:02.914Z",
			"updatedAt": "2025-03-24T17:37:02.914Z"
		},
		{
			"id": "8e4bf039-36c3-4c09-a126-31bf9b83ae4b",
			"itemName": "Книга",
			"address": "пр. Мира 5",
			"status": "В обработке",
			"createdAt": "2025-03-24T17:37:16.678Z",
			"updatedAt": "2025-03-24T17:37:16.678Z"
		}
	],
	"total": 2,
	"page": 1,
	"limit": 100,
	"totalPages": 1
}
``` 
имеет пагинацию в виде страниц

| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/orders` | Создать заказ |
### тело запроса:
```
{
  "itemName": "Книга",
  "address": "В обработке",
  "status": "В обработке" // не обизательно
}
```
## ответ:

```
{
	"message": "заказ создан",
	"order": {
		"id": "8e4bf039-36c3-4c09-a126-31bf9b83ae4b",
		"itemName": "Книга",
		"address": "В обработке",
		"status": "В обработке",
		"createdAt": "2025-03-24T17:59:10.265Z",
		"updatedAt": "2025-03-24T17:59:10.265Z"
	}
}
```
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/orders/:id` | Получить заказ |
### ответ:
```
{
	"order": {
		"id": "8e4bf039-36c3-4c09-a126-31bf9b83ae4b",
		"itemName": "Книга",
		"address": "В обработке",
		"status": "В обработке",
		"createdAt": "2025-03-24T17:59:10.265Z",
		"updatedAt": "2025-03-24T17:59:10.265Z"
	}
}
```