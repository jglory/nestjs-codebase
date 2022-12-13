import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from './database/mysql/mysql.module';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [ConfigModule.forRoot(), MysqlModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
