import * as dotenv from 'dotenv';

dotenv.config(); // Принудительно загружаем .env

export const PORT = process.env.PORT
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
