import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClientResultDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Length(2, 20)
  public name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Length(5, 2048)
  public homepage?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  public memo?: string;
}
