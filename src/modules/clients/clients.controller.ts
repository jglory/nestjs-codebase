import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateClientCommand } from './commands/create-client.command';
import { ClientResultDto } from './dto/client-result.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { FindAllQuery } from './queries/find-all.query';
import { FindOneByIdQuery } from './queries/find-one-by-id.query';
import { BypassTransformer } from '../../common/transformers/bypass.transformer';
import { ClientsService } from './clients.service';

@ApiTags('v1/clients')
@Controller('api/v1/clients')
export class ClientsController {
  public constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiCreatedResponse({
    description: '고객을 생성한다.',
    type: CreateClientDto,
  })
  public async createClient(@Body() dto: CreateClientDto) {
    return new BypassTransformer().process(
      this.clientsService.createClient(new CreateClientCommand(dto)),
    );
  }

  @Get()
  @ApiResponse({
    description: '고객 목록을 돌려준다.',
    type: ClientResultDto,
    isArray: true,
  })
  public findAll() {
    return new BypassTransformer().process(
      this.clientsService.findAll(new FindAllQuery()),
    );
  }

  @Get(':id')
  @ApiResponse({
    description: '고객 정보를 돌려준다.',
    type: ClientResultDto,
    isArray: false,
  })
  async findOneById(@Param('id') id: string) {
    return new BypassTransformer().process(
      this.clientsService.findOneById(new FindOneByIdQuery(+id)),
    );
  }
}
