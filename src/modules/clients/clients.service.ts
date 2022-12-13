import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientCommand } from './commands/create-client.command';
import { ClientEntity } from './entities/client.entity';
import { FindAllQuery } from './queries/find-all.query';
import { ByAllSpecification } from './repositories/find-all/by-all.specification';
import { FindOneByIdQuery } from './queries/find-one-by-id.query';
import { ByIdSpecification as FindOneByIdSpecification } from './repositories/find-one/by-id.specification';

@Injectable()
export class ClientsService {
  public constructor(
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
  ) {}

  async createClient(command: CreateClientCommand) {
    return (
      await this.clientsRepository.save(new ClientEntity(command.dto))
    ).toDto();
  }

  async findAll(query: FindAllQuery) {
    return (
      await this.clientsRepository.find(new ByAllSpecification().data)
    ).map((item) => item.toDto());
  }

  async findOneById(query: FindOneByIdQuery) {
    const result = await this.clientsRepository.findOne(
      new FindOneByIdSpecification(query.id).data,
    );
    return result ? result.toDto() : result;
  }
}
