import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config/env'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST || 'localhost',
      port: Number(DB_PORT) || 5432,
      username: DB_USER || 'postgres',
      password: DB_PASSWORD || 'password',
      database: DB_NAME || 'mydatabase',
      autoLoadEntities: true, 
      synchronize: true, 
    }),
  ],
})
export class DatabaseModule {}
