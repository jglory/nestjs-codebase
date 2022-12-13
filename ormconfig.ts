const config = {
  type: process.env.DB_RDB_TYPE,
  host: process.env.DB_RDB_HOST,
  port: +process.env.DB_RDB_PORT,
  username: process.env.DB_RDB_USERNAME,
  password: process.env.DB_RDB_PASSWORD,
  database: process.env.DB_RDB_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  cli: { migrationsDir: 'src/database/migrations' },
};

export = config;
