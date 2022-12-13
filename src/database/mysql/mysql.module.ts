import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: process.env.DB_RDB_TYPE as 'mariadb' | 'mysql',
        host: process.env.DB_RDB_HOST || 'localhost',
        port: +process.env.DB_RDB_PORT,
        username: process.env.DB_RDB_USERNAME,
        password: process.env.DB_RDB_PASSWORD,
        database: process.env.DB_RDB_DATABASE,
        entities: [join(__dirname, '../../../**/*.entity{.ts,.js}')],
        logging: process.env.ENV == 'localhost',
        synchronize: false, // false로 적용해야 합니다. 현재
        charset: 'utf8mb4',
        // migrationsRun: true,
        // dropSchema: true,
        // migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
        // // migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
      }),
    }),
  ],
})
export class MysqlModule {}
