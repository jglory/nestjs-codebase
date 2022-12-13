import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { BypassTransformer } from '../../common/transformers/bypass.transformer';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([ClientEntity])],
  providers: [BypassTransformer, ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
