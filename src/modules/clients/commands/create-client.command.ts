import { ICommand } from '@nestjs/cqrs';
import { CreateClientDto } from '../dto/create-client.dto';

export class CreateClientCommand implements ICommand {
  public constructor(readonly dto: CreateClientDto) {}
}
