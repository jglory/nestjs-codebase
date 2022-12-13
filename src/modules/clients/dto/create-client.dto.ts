import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ClientDto } from './client.dto';

export class CreateClientDto extends ClientDto {
  @ApiProperty({ required: true })
  @Transform(
    ({ value }) =>
      new Date(
        value.substring(0, 4) +
          '-' +
          value.substring(4, 6) +
          '-' +
          value.substring(6),
      ),
  )
  public createdAt;

  @ApiProperty({ required: true })
  public name: string;
}
